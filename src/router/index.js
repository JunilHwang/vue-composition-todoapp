import { createRouter, createWebHashHistory } from "vue-router";
import Step1 from "@/views/Step1";
import Step2 from "@/views/Step2";
import Step3 from "@/views/Step3";
import TeamList from "@/views/step3/TeamList";
import Kanban from "@/views/step3/Kanban";

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
    component: Step3,
    children: [
      {
        path: "",
        component: TeamList,
        name: "TeamList"
      },
      {
        path: "kanban",
        component: Kanban,
        name: "Kanban"
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
