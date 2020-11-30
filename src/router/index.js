import { createRouter, createWebHashHistory } from "vue-router";
import { Step1, Step2, Step3 } from "../views";

const routes = [
  {
    path: "/step1",
    name: "Step1",
    component: Step1
  },
  {
    path: "/step2",
    name: "Step2",
    component: Step2
  },
  {
    path: "/step3",
    name: "Step3",
    component: Step3
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
