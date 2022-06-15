using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using QRSCS_MS.Models;

namespace QRSCS_MS.Controllers
{
    public class LoginController : Controller
    {
        [HttpGet]
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Login(LoginModel lgm)
        {
            if(ModelState.IsValid)
            {
                return RedirectToAction("Dashboard", "Dashboard");
            }
            else
            {
                return View();
            }
            

            
        }
    }
}