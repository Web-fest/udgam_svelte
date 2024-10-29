<script>
    import MemberCard from './MemberCard.svelte';

    // Team members' data
    const teamMembers = [
      {
        name: "Sahil Kumar",
        image: "navnit.webp",
        phone: "+1234567890",
        instagram: "#",
        linkedin: "#",
        email: "sahil@example.com"
      },
      {
        name: "Prabhakar",
        image: "prabhakar.jpg",
        phone: "+1234567890",
        instagram: "#",
        linkedin: "#",
        email: "prabhakar@example.com"
      },
      {
        name: "Banani Das",
        image: "banani.jpg",
        phone: "+1234567890",
        instagram: "#",
        linkedin: "#",
        email: "banani@example.com"
      },
      {
        name: "Siddharth",
        image: "siddharth.jpg",
        phone: "+1234567890",
        instagram: "#",
        linkedin: "#",
        email: "siddharth@example.com"
      },
      {
        name: "Ayush Bhushan",
        image: "ayush.jpg",
        phone: "+1234567890",
        instagram: "#",
        linkedin: "#",
        email: "ayush@example.com"
      },
      {
        name: "Harshit Vyas",
        image: "harshit.jpg",
        phone: "+1234567890",
        instagram: "#",
        linkedin: "#",
        email: "harshit@example.com"
      },
      {
        name: "Kabir Man Rai",
        image: "kabir.jpg",
        phone: "+1234567890",
        instagram: "#",
        linkedin: "#",
        email: "kabir@example.com"
      }
    ];
  </script>
  
  <style>
    .core-team {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
    }
  
    .team-level {
      margin-bottom: 40px;
    }
  
    .team-level h2 {
      font-size: 24px;
      color: #d4af37; /* Color for the section titles */
      margin-bottom: 20px;
    }
  
    .team-row {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
    }
  </style>
  
  <div class="core-team">
    <div class="team-level">
      <h2>President</h2>
      <MemberCard {...teamMembers[0]} />
    </div>
  
    <div class="team-level">
      <h2>Vice Presidents</h2>
      <div class="team-row">
        <MemberCard {...teamMembers[1]} />
        <MemberCard {...teamMembers[2]} />
      </div>
    </div>
  
    <div class="team-level">
      <h2>Treasurer</h2>
      <MemberCard {...teamMembers[3]} />
    </div>
  
    <div class="team-level">
      <h2>General Secretaries</h2>
      <div class="team-row">
        <MemberCard {...teamMembers[4]} />
        <MemberCard {...teamMembers[5]} />
        <MemberCard {...teamMembers[6]} />
      </div>
    </div>
  </div>
  