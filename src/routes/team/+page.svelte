<script>
    import CoreTeam from '../../components/CoreTeam.svelte';
    import Coordinators from '../../components/Coordinator.svelte';
    import TeamLeads from '../../components/TeamLead.svelte';
  </script>
  
  <style>
    .page-title {
      text-align: center;
      font-size: 36px;
      color: #ff6b6b; /* Light color for the title */
      margin: 40px 0;
      font-family: 'Cinzel', serif; /* Fantasy-themed font */
    }
  
    .main-title {
      margin-top: 100px;
    }
  </style>
  
  <div>
    <h1 class="page-title main-title">Organizing Committee</h1>
    <h2 class="page-title">Core Team</h2>
    <CoreTeam />
    <h2 class="page-title">Coordinators</h2>
    <Coordinators />
    <h2 class="page-title">Team Leads</h2>
    <TeamLeads />
  </div>
  