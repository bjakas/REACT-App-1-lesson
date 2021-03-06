import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import SignInPage from "../SignInPage";
import ChatPage from "../ChatPage";
import NasaPage from "../NasaPage";
import ExchangeRatePage from "../ExchangeRatePage";
import OrderPage from "../OrderPage";

export default function AppRouter() {
  return (
    <div>
      <ul>
        <li><NavLink exact to="/">Index</NavLink></li>
        <li><NavLink to="/chat">Chat</NavLink></li>
        <li><NavLink to="/nasa">NASA</NavLink></li>
        <li><NavLink to="/exchange-rate">Exchange Rate</NavLink></li>
        <li><NavLink to="/order">Order</NavLink></li>
      </ul>
      <Switch>
        <Route exact path="/" component={SignInPage} />
        <Route path="/chat" component={ChatPage} />
        <Route path="/nasa" component={NasaPage} />
        <Route path="/exchange-rate" component={ExchangeRatePage} />
        <Route path="/order" component={OrderPage} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  )
}

/* PRIMJER S PREDAVANJA

// kao arrow f. const IndexPage = () => <h1>Index <Link to="/blog">Blog</Link></h1>; s time da onda Link importamo

function IndexPage() {
  return <h1>Index</h1>
}

function BlogPage() {
  return <h1>Blog</h1>
}

function FrontendBlogPage() {
  return <h1>FrontendBlog</h1>
}


export default function AppRouter() {
  return (
    <div>
      <ul>
        <li><NavLink exact to="/">Index</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/blog/frontend">Frontend Blog</NavLink></li>
      </ul>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/blog/frontend" component={FrontendBlogPage} />
        <Route path="/blog" component={BlogPage} />

      </Switch>
    </div>
  )
}
*/