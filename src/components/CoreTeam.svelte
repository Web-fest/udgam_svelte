<script>
    import MemberCard from './MemberCard.svelte';
    import sahil from '$lib/assets/images/sahil.webp'; 
    import sid from '$lib/assets/images/siddharth.webp';
    import banani from '$lib/assets/images/banani.webp';
    import ayush from '$lib/assets/images/ayush.webp';
    // Team members' data
    const teamMembers = [
      {
        name: "Sahil Kumar",
        image: sahil,
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
        image: banani,
        phone: "+1234567890",
        instagram: "#",
        linkedin: "#",
        email: "banani@example.com"
      },
      {
        name: "Siddharth",
        image: sid,
        phone: "+919835273753",
        instagram: "https://www.instagram.com/thessiddharth?igsh=ZTJ6eWtvcHpsdHQ1&utm_source=qr",
        linkedin: "https://www.linkedin.com/in/siddharth-choudhary-77483228b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "siddharth@example.com"
      },
      {
        name: "Ayush Bhushan",
        image: ayush,
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
  