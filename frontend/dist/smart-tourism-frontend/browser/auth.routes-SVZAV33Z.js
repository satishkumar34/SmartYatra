import "./chunk-WDMUDEB6.js";

// src/app/features/auth/auth.routes.ts
var authRoutes = [
  {
    path: "login",
    loadComponent: () => import("./login.component-C422ZBC4.js").then((m) => m.LoginComponent)
  },
  {
    path: "register",
    loadComponent: () => import("./register.component-BRADB3F2.js").then((m) => m.RegisterComponent)
  },
  { path: "", redirectTo: "login", pathMatch: "full" }
];
export {
  authRoutes
};
//# sourceMappingURL=auth.routes-SVZAV33Z.js.map
