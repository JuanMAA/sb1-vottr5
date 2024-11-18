"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { TeamsDropdown } from "@/components/teams-dropdown";
import { TournamentsDropdown } from "@/components/tournaments-dropdown";
import { PlayersDropdown } from "@/components/players-dropdown";
import { Trophy, Users, Medal, User2, PenTool, Youtube, Instagram } from "lucide-react";

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-16">
        <div className="flex h-full items-center justify-between">
          {/* Left section - Logo and Navigation */}
          <div className="flex items-center gap-6">
            <Link 
              href="/" 
              className="flex items-center gap-2.5 font-bold text-xl group"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-emerald-600/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Trophy className="w-6 h-6 relative text-emerald-600" />
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-500 font-extrabold">
                FutbolDigital.cl
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <TeamsDropdown>
                <Users className="w-4 h-4 mr-2" />
                Equipos
              </TeamsDropdown>
              <TournamentsDropdown>
                <Medal className="w-4 h-4 mr-2" />
                Torneos
              </TournamentsDropdown>
              <PlayersDropdown>
                <User2 className="w-4 h-4 mr-2" />
                Jugadores
              </PlayersDropdown>
            </nav>
          </div>

          {/* Right section - Actions */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Youtube className="w-5 h-5" />
                  <span className="sr-only">YouTube</span>
                </Button>
              </Link>
            </div>
            <Button 
              className="hidden md:inline-flex bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white border-0 shadow-md hover:shadow-lg transition-all duration-200"
            >
              <PenTool className="w-4 h-4 mr-2" />
              Contribuir
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}