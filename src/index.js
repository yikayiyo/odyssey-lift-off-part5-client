import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import Pages from "./pages";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	// uri: "http://localhost:4000",
	uri: "https://legao-graphql-cats.herokuapp.com/",
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<GlobalStyles />
		<Pages />
	</ApolloProvider>,
	document.getElementById("root")
);
