import { RouteConfig } from "vue-router"

const R = (name: string) => () => import(`@/views/TabBarView/${ name }.vue`)

const routes: RouteConfig[] = [ {
	name: "Home",
	path: "home",
	component: R("Home"),
	meta: {}
}, {
	name: "Seller",
	path: "seller",
	component: R("Seller"),
	meta: {}
}, {
	name: "Query",
	path: "query",
	component: R("Query"),
	meta: {}
}, {
	name: "Cart",
	path: "cart",
	component: R("Cart"),
	meta: {}
}, {
	name: "Personal",
	path: "personal",
	component: R("Personal"),
	meta: {}
} ]

export default routes
