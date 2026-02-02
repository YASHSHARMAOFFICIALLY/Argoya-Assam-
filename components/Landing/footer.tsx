import React from "react";
import {
  FaHeart,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaStethoscope,
  FaUser,
  FaFirstAid,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-background/80 border-t border-muted/20">
      {/* CHANGED: Reduced py-12 to py-6 */}
      <div className="w-full px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          {/* CHANGED: Reduced space-y-6 to space-y-4 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center shadow-lg">
                <FaHeart className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">
                  MediConnect
                </span>
                <span className="text-xs text-muted-foreground">
                  Healthcare Excellence
                </span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-snug">
              Your trusted partner in healthcare, providing comprehensive
              medical services with cutting-edge technology.
            </p>

            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-rose-500">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-rose-500">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-rose-500">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-rose-500">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Medical Services */}
          {/* CHANGED: Reduced space-y-6 to space-y-4 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FaStethoscope className="w-4 h-4 text-rose-500" />
              <h3 className="text-base font-semibold">Medical Services</h3>
            </div>
            {/* CHANGED: Reduced gap-3 to gap-1.5 */}
            <ul className="grid grid-cols-1 gap-1.5">
              {[
                "Emergency Care",
                "Primary Care",
                "Specialist Consultations",
                "Laboratory Services",
                "Radiology & Imaging",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/soon"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-rose-500 transition-colors"
                  >
                    <div className="w-1 h-1 rounded-full bg-rose-500"></div>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Resources */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FaUser className="w-4 h-4 text-rose-500" />
              <h3 className="text-base font-semibold">Patient Resources</h3>
            </div>
            <ul className="grid grid-cols-1 gap-1.5">
              <li>
                <Link
                  href="/auth"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-rose-500 transition-colors"
                >
                  <div className="w-1 h-1 rounded-full bg-rose-500"></div>
                  Patient Portal
                </Link>
              </li>
              {[
                "Find a Doctor",
                "Medical Records",
                "Insurance Information",
                "Patient Education",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/soon"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-rose-500 transition-colors"
                  >
                    <div className="w-1 h-1 rounded-full bg-rose-500"></div>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FaFirstAid className="w-4 h-4 text-rose-500" />
              <h3 className="text-base font-semibold">Contact & Hours</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-muted-foreground">
                <FaMapMarkerAlt className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span className="leading-tight">
                  123 Healthcare Avenue
                  <br />
                  MD 12345
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <FaPhone className="w-4 h-4 text-rose-500" />
                <a href="tel:+1-800-MED-HELP" className="hover:text-rose-500">
                  1-800-MED-HELP
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <FaEnvelope className="w-4 h-4 text-rose-500" />
                <a
                  href="mailto:care@mediconnect.com"
                  className="hover:text-rose-500"
                >
                  care@mediconnect.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <FaCalendarAlt className="w-4 h-4 text-rose-500 mt-0.5" />
                <div className="leading-tight">
                  <p>Mon-Fri: 8am - 8pm</p>
                  <p>Sat-Sun: 9am - 5pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        {/* CHANGED: Reduced mt-12 pt-8 to mt-8 pt-4 */}
        <div className="mt-8 pt-4 border-t border-muted/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} MediConnect. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              <Link
                href="/privacy"
                className="text-xs text-muted-foreground hover:text-rose-500"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-muted-foreground hover:text-rose-500"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Emergency Banner - made slightly smaller */}
      <div className="w-full bg-rose-500 py-1.5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <FaPhone className="h-3 w-3 animate-pulse" />
              <span className="text-xs font-semibold">
                24/7 Emergency: 1-800-MED-HELP
              </span>
            </div>
            <span className="text-xs hidden sm:block">
              Always Available
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}