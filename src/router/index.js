import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import(/* webpackChunkName: "Home" */ "../views/Home.vue");
const WorkspaceDetail = () =>
  import(
    /* webpackChunkName": WorkspaceDetail */ "../components/workspace/WorkspaceDetail"
  );
const BoardDetail = () =>
  import(
    /* webpackChunkName: "BoardDetail" */ "../components/Boards/BoardDetail"
  );
const Profile = () =>
  import(/* webpackChunkName: "Profile" */ "../components/Profile/Profile");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/workspace/boards",
    name: "WorkspaceDetail",
    component: WorkspaceDetail,
  },
  {
    path: "/workspace/boards/:id",
    name: "BoardDetail",
    component: BoardDetail,
    props: true,
  },
  {
    path: "/user-profile",
    name: "Profile",
    component: Profile,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => {
    if (VueRouter.isNavigationFailure(err)) {
      // resolve err
      return err;
    }
    // rethrow error
    return Promise.reject(err);
  });
};

export default router;
