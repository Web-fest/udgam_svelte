<script>
    import MemberCard from './MemberCard.svelte';
    import sahil from '$lib/assets/images/sahil.webp'; 
    import sid from '$lib/assets/images/siddharth.webp';
    import banani from '$lib/assets/images/banani.webp';
    import ayush from '$lib/assets/images/ayush.webp';
    import prabhakar from '$lib/assets/images/prabhakar.webp';
    import kabir from '$lib/assets/images/kabir.webp';
    import harshit from '$lib/assets/images/harshit.webp';
    
    // Team members' data
    const teamMembers = [
      {
        name: "Sahil Kumar",
        image: sahil,
        phone: "+917076448001",
        instagram: "https://www.instagram.com/sahil_srgm/profilecard/?igsh=cjEwNWlna2hkbmd5",
        linkedin: "https://www.linkedin.com/in/sahil-kumar-827410283/",
        email: "b220063@nitsikkim.ac.in"
      },
      {
        name: "Prabhakar",
        image: prabhakar,
        phone: "+1234567890",
        instagram: "https://www.instagram.com/prabhakar.anshik/profilecard/?igsh=MWJudnJ6ZDlveWY4aA==",
        linkedin: "https://www.linkedin.com/in/prabhakar-a20666291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "b220086@nitsikkim.ac.in"
      },
      {
        name: "Banani Das",
        image: banani,
        phone: "+917679169195",
        instagram: "https://www.instagram.com/banani._.27?utm_source=qr&igsh=d3Z4ZnYydHI1OXg2",
        linkedin: "https://www.linkedin.com/in/banani-das-238611300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
        email: "b220047@nitsikkim.ac.in"
      },
      {
        name: "Siddharth",
        image: sid,
        phone: "+919835273753",
        instagram: "https://www.instagram.com/thessiddharth?igsh=ZTJ6eWtvcHpsdHQ1&utm_source=qr",
        linkedin: "https://www.linkedin.com/in/siddharth-choudhary-77483228b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "b220034@nitsikkim.ac.in"
      },
      {
        name: "Ayush Bhushan",
        image: ayush,
        phone: "+917488252185",
        instagram: "https://www.instagram.com/ayush_bhushan11?igsh=MWZzajVldHVmanA5cQ%3D%3D&utm_source=qr",
        linkedin: "http://linkedin.com/in/ayush-bhushan-624b2426b",
        email: "b220098@nitsikkim.ac.in"
      },
      {
        name: "Harshit Vyas",
        image: harshit,
        phone: "+919509355025",
        instagram: "https://www.instagram.com/harshit_vyas27/profilecard/?igsh=MWg1YWRhaXBydjJwZg==",
        linkedin: "https://www.linkedin.com/in/harshit-vyas-330066257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "b220014@nitsikkim.ac.in"
      },
      {
        name: "Kabir Man Rai",
        image: kabir,
        phone: "+919800017676",
        instagram: "https://www.instagram.com/kush_b_rai/profilecard/?igsh=MTF4YXZ6ajF0Z283aw==",
        linkedin: "https://www.linkedin.com/in/kabir-man-rai?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "b220132@nitsikkim.ac.in"
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
  