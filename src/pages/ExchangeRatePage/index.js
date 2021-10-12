import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";

// da bismo poslali upit kreiramo clienta putem kojega možemo slati upit i dajemo mu putanju do apija (code sandbox)
// da bismo mogli koristiti client moramo ga upariti sa ApolloProviderom

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io'
});

// napravimo componentu koja će nam prikazati tečajnu listu
// pripremimo query i ubacimo ga u hook da dobijemo rezultat s useQuery (slično kao useState); useQuery hook u sebi prima gql i to je funkcija koja prima string i u tu funkciju s template literalima upisujemo naš query i ta funkcija će se pobrinuti da taj query bude dobro formatiran, da ga se može koristiti u sklopu useQuerya

/* response možemo destrukturirati u { data, loading, error } i samo to koristimo iz responsea, njega možemo console.log i vidjeti što sve dobijemo */
// dodamo propove currency i limit i currency interpoliramo niže u template literale

function ExchangeRates({ currency, limit }) {
  const { data, loading, error } = useQuery(gql(` 
  {
    rates(currency: "${currency}") {
      currency
      rate
    }
  }
  `));

  // moramo i loading i error postaviti prije nego koristimo data jer nam se inače neće data prikazati

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  // data je objekt i unutar njega je rates, svaki rates mapiramo u li item componentu, a za key uzmemo currency jer je valuta jedinstvena pa je dobar key, a za vrijednost ispišemo currency i rate
  // slice metodu koristimo da odrežemo dio niza do točke do koje želimo, tj. do limita i onda mapiramo, tj. sliceaj mi rates od 0 do limit i onda ih mapiraj

  return (
    <div>
      <div>Tečaj za {currency}</div>
      <ul>
        {data.rates.slice(0, limit).map((item) =>
          <li key={item.currency}>
            {item.currency}: {item.rate}
          </li>
        )}
      </ul>
    </div>
  );
}

// omogućimo dijelu aplikacije pristup ApolloProvideru i damo mu client
export default function ExchangeRatePage() {
  return (
    <ApolloProvider client={client}>
      <div className="ExchangeRatePage">
        <h1>Exchange Rate</h1>
        <ExchangeRates currency="EUR" limit={10} />
        <ExchangeRates currency="HRK" limit={5} />
      </div>
    </ApolloProvider>
  );
}