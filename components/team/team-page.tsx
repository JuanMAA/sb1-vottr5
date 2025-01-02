"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TeamOverview } from "@/components/team/team-overview";
import { TeamSquad } from "@/components/team/team-squad";
import { TeamStats } from "@/components/team/team-stats";
import { TeamTournaments } from "@/components/team/team-tournaments";
import { TeamTrophies } from "@/components/team/team-trophies";
import { TeamHeader } from "@/components/team/team-header";
import type { Team } from "@/lib/teams-data";

interface TeamPageProps {
  team;
}

export function TeamPage({ team }: TeamPageProps) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen">
      <TeamHeader team={team} />
      
      <div className="container py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">General</TabsTrigger>
            {/* <TabsTrigger value="squad">Plantilla</TabsTrigger> */}
            <TabsTrigger value="stats">Estadísticas</TabsTrigger>
            <TabsTrigger value="tournaments">Torneos</TabsTrigger>
            <TabsTrigger value="trophies">Palmarés</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <TeamOverview team={team} />
          </TabsContent>

          <TabsContent value="squad">
            <TeamSquad squad={team.squad} />
          </TabsContent>

          <TabsContent value="stats">
            <TeamStats stats={team.stats} currentForm={team.currentForm} />
          </TabsContent>

          <TabsContent value="tournaments">
            <TeamTournaments tournaments={team.tournaments} />
          </TabsContent>

          <TabsContent value="trophies">
            <TeamTrophies trophies={team.trophies} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}