import Vue from "vue"
import Router, { Route, RouteConfig } from "vue-router"
import TabBarRouter from "./Modules/TabBarRouter"

Vue.use(Router)

const R = (name: string) => () => import(`@/views/${ name }.vue`)

const Route: RouteConfig[] = [ {
	name: "TabBarView",
	path: "/",
	component: R("TabBarView/Index"),
	redirect: "/home",
	children: TabBarRouter
} ]


const createRouter = () => new Router({
	mode: "history",
	routes: Route
})

const router = createRouter()

router.beforeEach((to: Route, from: Route, next: any): void => {
	next()
})

router.afterEach((to: Route, from: Route) => {

})

router.onError((error: Error) => {

})

export const resetRouter = () => {
	const newRouter = createRouter();
	(router as any).matcher = (newRouter as any).matcher // reset router
}


export default router
