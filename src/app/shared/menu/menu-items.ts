export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  type?: string;
  collapse?: string;
  children?: ChildrenItems2[];
  isCollapsed?: boolean;
}
export interface ChildrenItems2 {
  path?: string;
  title?: string;
  type?: string;
}

// Menu Items
// Staff / Kakitangan
export const STROUTES: RouteInfo[] = [
  {
    path: "/user/dashboard",
    title: "Dashboard",
    type: "link",
    icontype: "fas fa-desktop text-primary",
  },
  {
    path: "/user/trainings",
    title: "Latihan",
    type: "sub",
    icontype: "fas fa-chalkboard-teacher text-primary",
    collapse: "trainings",
    isCollapsed: true,
    children: [
      { path: "summary", title: "Ringkasan", type: "link" },
      { path: "list", title: "Senarai Semasa", type: "link" },
      { path: "history", title: "Senarai Sejarah", type: "link" },
    ],
  },
  {
    path: "/user/exams",
    title: "Peperiksaan",
    type: "sub",
    icontype: "fas fa-list-alt text-primary",
    collapse: "exams",
    isCollapsed: true,
    children: [
      { path: "summary", title: "Ringkasan", type: "link" },
      { path: "add", title: "Tambah", type: "link" },
    ],
  },
  {
    path: "/user/need-analysis",
    title: "Keperluan Latihan",
    type: "link",
    icontype: "fas fa-chart-pie text-primary",
  },
  {
    path: "/user/takwim",
    title: "Takwim",
    type: "link",
    icontype: "far fa-calendar-alt text-primary",
  },
];

// Training Coordinator / Penyelaras Latihan
export const TCROUTES: RouteInfo[] = [
  {
    path: "/user/dashboard",
    title: "Dashboard",
    type: "link",
    icontype: "fas fa-desktop text-primary",
  },
  {
    path: "/user/trainings",
    title: "Latihan",
    type: "sub",
    icontype: "fas fa-chalkboard-teacher text-primary",
    collapse: "trainings",
    isCollapsed: true,
    children: [
      { path: "summary", title: "Ringkasan", type: "link" },
      { path: "list", title: "Senarai Semasa", type: "link" },
      { path: "history", title: "Senarai Sejarah", type: "link" },
    ],
  },
  {
    path: "/user/exams",
    title: "Peperiksaan",
    type: "sub",
    icontype: "fas fa-list-alt text-primary",
    collapse: "exams",
    isCollapsed: true,
    children: [
      { path: "summary", title: "Ringkasan", type: "link" },
      { path: "add", title: "Tambah", type: "link" },
    ],
  },
  {
    path: "/user/need-analysis",
    title: "Keperluan Latihan",
    type: "link",
    icontype: "fas fa-chart-pie text-primary",
  },
  {
    path: "/user/takwim",
    title: "Takwim",
    type: "link",
    icontype: "far fa-calendar-alt text-primary",
  },
  {
    path: "/training-coordinator/dashboard",
    title: "Dashboard Latihan",
    type: "link",
    icontype: "fas fa-home text-indigo",
  },
  {
    path: "/training-coordinator/trainings",
    title: "Pengurusan Latihan",
    type: "sub",
    icontype: "fas fa-chalkboard-teacher text-indigo",
    collapse: "trainings",
    isCollapsed: true,
    children: [
      { path: "summary", title: "Ringkasan", type: "link" },
      { path: "add", title: "Tambah", type: "link" },
      // { path: '', title: '', type: 'link' }
    ],
  },
  {
    path: "/training-coordinator/exams",
    title: "Pengurusan Peperiksaan",
    type: "sub",
    icontype: "fas fa-list-alt text-indigo",
    collapse: "exams",
    isCollapsed: true,
    children: [
      { path: "summary", title: "Ringkasan", type: "link" },
      { path: "add", title: "Tambah", type: "link" },
    ],
  },
  {
    path: "/training-coordinator/need-analysis",
    title: "Analisa Keperluan Latihan",
    type: "link",
    icontype: "fas fa-chart-pie text-indigo",
  },
  {
    path: "/training-coordinator/evaluations",
    title: "Penilaian",
    type: "link",
    icontype: "fas fa-file-alt text-indigo",
  },
  {
    path: "/training-coordinator/report",
    title: "Laporan",
    type: "sub",
    icontype: "fas fa-chart-bar text-indigo",
    collapse: "report",
    isCollapsed: true,
    children: [
      { path: "generate", title: "Jana", type: "link" },
      { path: "configuration", title: "Konfigurasi", type: "link" },
    ],
  },
  {
    path: "/training-coordinator/configuration",
    title: "Konfigurasi",
    type: "link",
    icontype: "fas fa-tools text-indigo",
  },
  {
    path: "/training-coordinator/users",
    title: "Pengurusan Pengguna",
    type: "link",
    icontype: "fas fa-user-shield text-indigo",
  },
];
