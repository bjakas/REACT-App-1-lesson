import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import SignInPage from "../ChatPage";
import ChatPage from "../ChatPage";

export default function AppRouter() {
  return (
    <div>
      <ul>
        <li><NavLink exact to="/">Sign In</NavLink></li>
        <li><NavLink to="/chat">Chat</NavLink></li>
      </ul>
      <Switch>
        <Route exact path="/" component={SignInPage} />
        <Route path="/chat" component={ChatPage} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  )
}

/* PRIMJER S PREDAVANJE

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