import messages from "../assets/icons/messages.svg";
import staffing from "../assets/icons/staffing.svg";
import dashboard from "../assets/icons/dashboard.svg";
import projects from "../assets/icons/projects.svg";
import support from "../assets/icons/support.svg";
import settings from "../assets/icons/settings.svg";
import person from "../assets/icons/person.svg";
import jobs from "../assets/icons/jobs.svg";
import eye from "../assets/icons/eye.svg";
import proposals from "../assets/icons/proposals.svg";

export const sidebarOptions = [
  {
    name: "Dashboard",
    active: true,
    icon: dashboard,
  },
  {
    name: "Projects",
    active: false,
    icon: projects,
  },
  {
    name: "Staffing",
    active: false,
    icon: staffing,
  },
  {
    name: "Messages",
    active: false,
    icon: messages,
  },
];

export const bottomOptions = [
  {
    name: "Support",
    active: false,
    icon: support,
  },
  {
    name: "Settings",
    active: false,
    icon: settings,
  },
];

export const stats = [
  {
    title: "active projects",
    value: "07",
    icon: person,
  },
  {
    title: "Proposals",
    value: "04",
    icon: proposals,
  },
  {
    title: "Active Jobs",
    value: "03",
    icon: jobs,
  },
  {
    title: "application",
    value: "240",
    icon: eye,
  },
];

export const project = [
  {
    title: "Thermal protective performance and mult",
    status: "review",
    statusText: "Resume Review",
  },
  {
    title:
      "Effect of heat flux and moisture content on the thermal protective performance of outer layer of fire pro",
    status: "almost",
    statusText: "Interview",
  },
  {
    title: "Thermal protective performance and mult",
    status: "task",
    statusText: "Task",
  },
  {
    title: "Testing and evaluation of functional textiles",
    status: "paid",
    statusText: "Payment",
  },
  {
    title: "Development of thermal liner for Extreme Heat Protective Clothing",
    status: "closed",
    statusText: "Closed",
  },
  {
    title: "Testing and evaluation of functional textiles",
    status: "paid",
    statusText: "Payment",
  },
];

export const activities = [
  {
    title: "Interview is scheduled for 12PM",
    time: "6:29 PM",
    status: "task",
  },
  {
    title: "Applicant applied on Technical researcher",
    time: "8:21 PM",
    status: "review",
  },
  {
    title: "Interview is cancelled",
    time: "7:10 PM",
    status: "almost",
  },
  {
    title: "Applicant applied on Technical researcher",
    time: "6:29 PM",
    status: "review",
  },
  {
    title: "Recieved Proposal",
    time: "6:29 PM",
    status: "paid",
  },
  {
    title: "Interview is scheduled for 12PM",
    time: "6:29 PM",
    status: "task",
  },
];

export const colorCodes = {
  paid: "#44C677",
  closed: "#D9D9D9",
  task: "#73C2B4",
  almost: "#CD7849",
  review: "#FDD26E",
};
