import { createRouter, createWebHashHistory } from "vue-router";
import Step1 from "@/views/Step1";
import Step2 from "@/views/Step2";
import Step3 from "@/views/Step3";

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
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
