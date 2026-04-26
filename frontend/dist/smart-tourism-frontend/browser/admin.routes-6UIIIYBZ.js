import "./chunk-WDMUDEB6.js";

// src/app/features/admin/admin.routes.ts
var adminRoutes = [
  {
    path: "",
    loadComponent: () => import("./admin-dashboard.component-LEQM4R7P.js").then((m) => m.AdminDashboardComponent)
  },
  {
    path: "places",
    loadComponent: () => import("./admin-places.component-EJNPH7RD.js").then((m) => m.AdminPlacesComponent)
  },
  {
    path: "hotels",
    loadComponent: () => import("./admin-hotels.component-G6DZAKDR.js").then((m) => m.AdminHotelsComponent)
  },
  {
    path: "bookings",
    loadComponent: () => import("./admin-bookings.component-OXHTQ36L.js").then((m) => m.AdminBookingsComponent)
  },
  {
    path: "users",
    loadComponent: () => import("./admin-users.component-7ZD4PLQT.js").then((m) => m.AdminUsersComponent)
  }
];
export {
  adminRoutes
};
//# sourceMappingURL=admin.routes-6UIIIYBZ.js.map
