import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import App from './App'
import ProductsListing from '../pages/ProductsListing'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: 'collection/:collectionName',
		element: <ProductsListing />
	}
])


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)