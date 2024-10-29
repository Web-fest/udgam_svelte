<script>
  import MemberCard from './MemberCard.svelte';

  const teamLeads = {
    conveyanceDiscipline: [
      {
        name: "Amrish Kumar",
        role: "Conveyance & Discipline Lead",
        image: "amrish_kumar.jpg",
        phone: "1234567890",
        instagram: "#",
        linkedin: "#",
        email: "amrish@example.com"
      },
      {
        name: "Daksh Bhardwaj",
        role: "Conveyance & Discipline Lead",
        image: "daksh_bhardwaj.jpg",
        phone: "1234567890",
        instagram: "#",
        linkedin: "#",
        email: "daksh@example.com"
      },
      {
        name: "Sanjeev Kumar",
        role: "Conveyance & Discipline Lead",
        image: "sanjeev_kumar.jpg",
        phone: "1234567890",
        instagram: "#",
        linkedin: "#",
        email: "sanjeev@example.com"
      }
    ],
    marketing: [
      {
        name: "Rahul Kumar Prasad",
        role: "Marketing Lead",
        image: "rahul_prasad.jpg",
        phone: "1234567890",
        instagram: "#",
        linkedin: "#",
        email: "rahul@example.com"
      },
      {
        name: "Anurag Prasad",
        role: "Marketing Lead",
        image: "anurag_prasad.jpg",
        phone: "1234567890",
        instagram: "#",
        linkedin: "#",
        email: "anurag@example.com"
      }
    ],
    cultural: [
      {
        name: "Chunni Zangmu Bhutia",
        role: "Cultural Lead",
        image: "chunni_bhutia.jpg",
        phone: "1234567890",
        instagram: "#",
        linkedin: "#",
        email: "chunni@example.com"
      },
      {
        name: "Sananla Butia",
        role: "Cultural Lead",
        image: "sananla_butia.jpg",
        phone: "1234567890",
        instagram: "#",
        linkedin: "#",
        email: "sananla@example.com"
      }
    ],
    infrastructure: [
      {
        name: "Roshan Srivastava",
        role: "Infrastructure & Wind Up Lead",
        image: "roshan_srivastava.jpg",
        phone: "1234567890",
        instagram: "#",
        linkedin: "#",
        email: "roshan@example.com"
      },
      {
        name: "Manasvi Giri",
        role: "Infrastructure & Wind Up Lead",
        image: "manasvi_giri.jpg",
        phone: "1234567890",
        instagram: "#",
        linkedin: "#",
        email: "manasvi@example.com"
      }
    ],
    graphicsMerch: [
      {
        name: "Fauzia Arshad",
        role: "Graphics & Merchandise Lead",
        image: "fauzia_arshad.jpg",
        phone: "1234567890",
        instagram: "#",
        linkedin: "#",
        email: "fauzia@example.com"
      },
      {
        name: "Rohan Darjee",
        role: "Graphics & Merchandise Lead",
        image: "rohan_darjee.jpg",
        phone: "1234567890",
        instagram: "#",
        linkedin: "#",
        email: "rohan@example.com"
      }
    ],
    guestReceiving: [
      {
        name: "Subha Kumari",
        role: "Guest Receiving Lead",
        image: "subha_kumari.jpg",
        phone: "1234567890",
        instagram: "#",
        linkedin: "#",
        email: "subha@example.com"
      },
      {
        name: "Supriya Kumari",
        role: "Guest Receiving Lead",
        image: "supriya_kumari.jpg",
        phone: "1234567890",
        instagram: "#",
        linkedin: "#",
        email: "supriya@example.com"
      }
    ],
    singleLeads: [
      {
        name: "Aditya Sharma",
        role: "Web/App Dev Lead",
        image: "/lib/assets/images/vipin.webp",
        phone: "1234567890",
        instagram: "#",
        linkedin: "#",
        email: "aditya@example.com"
      },
      {
        name: "Vaibhav Mishra",
        role: "Sponsorship Lead",
        image: "vaibhav_mishra.jpg",
        phone: "1234567890",
        instagram: "#",
        linkedin: "#",
        email: "vaibhav@example.com"
      },
      {
        name: "Vipin Mishra",
        role: "Events Lead",
        image: "vipin.webp",
        phone: "1234567890",
        instagram: "#",
        linkedin: "#",
        email: "vipin@example.com"
      },
      {
        name: "Amandeep",
        role: "Publicity Lead",
        image: "amandeep.jpg",
        phone: "1234567890",
        instagram: "#",
        linkedin: "#",
        email: "amandeep@example.com"
      },
      {
        name: "Navnit Kr Sharma",
        role: "Content Lead",
        image: "navnit_sharma.jpg",
        phone: "1234567890",
        instagram: "#",
        linkedin: "#",
        email: "navnit@example.com"
      },
      {
        name: "Aditya Prasad",
        role: "Technical Lead",
        image: "aditya_prasad.jpg",
        phone: "1234567890",
        instagram: "#",
        linkedin: "#",
        email: "aditya_prasad@example.com"
      },
      {
        name: "Prashant Kumar",
        role: "Hospitality & Logistics Lead",
        image: "prashant_kumar.jpg",
        phone: "1234567890",
        instagram: "#",
        linkedin: "#",
        email: "prashant@example.com"
      },
      {
        name: "Siddharth Chandra Prabhakar",
        role: "Medical Lead",
        image: "siddharth_prabhakar.jpg",
        phone: "1234567890",
        instagram: "#",
        linkedin: "#",
        email: "siddharth@example.com"
      }
    ]
  };
</script>

<style>
  .team-leads {
    display: flex;
    flex-wrap: wrap;
    font-size: 24px;
    justify-content: center;
    text-align:center;
    color: #d4af37;
    gap: 20px; /* Space between cards */
    font-family: 'Cinzel', serif;
  }

  .section-title {
    text-align: center;
    font-size: 24px;
    color: #d4af37; /* Light color for the title */
    margin: 40px 0;
    font-family: 'Cinzel', serif; /* Fantasy-themed font */
  }

  .lead-group {
    margin-bottom: 40px; /* Space between groups */
  }
</style>

<div class="lead-group">
  <h3 class="section-title">Conveyance & Discipline Leads</h3>
  <div class="team-leads">
    {#each teamLeads.conveyanceDiscipline as lead}
      <MemberCard
        name={lead.name}
        role={lead.role}
        image={lead.image}
        phone={lead.phone}
        instagram={lead.instagram}
        linkedin={lead.linkedin}
        email={lead.email}
      />
    {/each}
  </div>
</div>

<div class="lead-group">
  <h3 class="section-title">Marketing Leads</h3>
  <div class="team-leads">
    {#each teamLeads.marketing as lead}
      <MemberCard
        name={lead.name}
        role={lead.role}
        image={lead.image}
        phone={lead.phone}
        instagram={lead.instagram}
        linkedin={lead.linkedin}
        email={lead.email}
      />
    {/each}
  </div>
</div>

<div class="lead-group">
  <h3 class="section-title">Cultural Leads</h3>
  <div class="team-leads">
    {#each teamLeads.cultural as lead}
      <MemberCard
        name={lead.name}
        role={lead.role}
        image={lead.image}
        phone={lead.phone}
        instagram={lead.instagram}
        linkedin={lead.linkedin}
        email={lead.email}
      />
    {/each}
  </div>
</div>

<div class="lead-group">
  <h3 class="section-title">Infrastructure & Wind Up Leads</h3>
  <div class="team-leads">
    {#each teamLeads.infrastructure as lead}
      <MemberCard
        name={lead.name}
        role={lead.role}
        image={lead.image}
        phone={lead.phone}
        instagram={lead.instagram}
        linkedin={lead.linkedin}
        email={lead.email}
      />
    {/each}
  </div>
</div>

<div class="lead-group">
  <h3 class="section-title">Graphics & Merchandise Leads</h3>
  <div class="team-leads">
    {#each teamLeads.graphicsMerch as lead}
      <MemberCard
        name={lead.name}
        role={lead.role}
        image={lead.image}
        phone={lead.phone}
        instagram={lead.instagram}
        linkedin={lead.linkedin}
        email={lead.email}
      />
    {/each}
  </div>
</div>

<div class="lead-group">
  <h3 class="section-title">Guest Receiving Leads</h3>
  <div class="team-leads">
    {#each teamLeads.guestReceiving as lead}
      <MemberCard
        name={lead.name}
        role={lead.role}
        image={lead.image}
        phone={lead.phone}
        instagram={lead.instagram}
        linkedin={lead.linkedin}
        email={lead.email}
      />
    {/each}
  </div>
</div>

<div class="lead-group">
  <h3 class="section-title">Other Leads</h3>
  <div class="team-leads">
    <div class="member-card">
      <MemberCard
        name="Aditya Sharma"
        role="Web/App Dev Lead"
        image="aditya_sharma.jpg"
        phone="1234567890"
        instagram="#"
        linkedin="#"
        email="aditya@example.com"
      />
      <p class="team-name">Web/App Dev</p>
    </div>

    <div class="member-card">
      <MemberCard
        name="Vaibhav Mishra"
        role="Sponsorship Lead"
        image="vaibhav_mishra.jpg"
        phone="1234567890"
        instagram="#"
        linkedin="#"
        email="vaibhav@example.com"
      />
      <p class="team-name">Sponsorship</p>
    </div>

    <div class="member-card">
      <MemberCard
        name="Vipin Mishra"
        role="Events Lead"
        image="vipin.webp"
        phone="1234567890"
        instagram="#"
        linkedin="#"
        email="vipin@example.com"
      />
      <p class="team-name">Events</p>
    </div>

    <div class="member-card">
      <MemberCard
        name="Amandeep"
        role="Publicity Lead"
        image="amandeep.jpg"
        phone="1234567890"
        instagram="#"
        linkedin="#"
        email="amandeep@example.com"
      />
      <p class="team-name">Publicity</p>
    </div>

    <div class="member-card">
      <MemberCard
        name="Navnit Kr Sharma"
        role="Content Lead"
        image="navnit_sharma.jpg"
        phone="1234567890"
        instagram="#"
        linkedin="#"
        email="navnit@example.com"
      />
      <p class="team-name">Content</p>
    </div>

    <div class="member-card">
      <MemberCard
        name="Aditya Prasad"
        role="Technical Lead"
        image="aditya_prasad.jpg"
        phone="1234567890"
        instagram="#"
        linkedin="#"
        email="aditya_prasad@example.com"
      />
      <p class="team-name">Technical</p>
    </div>

    <div class="member-card">
      <MemberCard
        name="Prashant Kumar"
        role="Hospitality & Logistics Lead"
        image="prashant_kumar.jpg"
        phone="1234567890"
        instagram="#"
        linkedin="#"
        email="prashant@example.com"
      />
      <p class="team-name">Hospitality & Logistics</p>
    </div>

    <div class="member-card">
      <MemberCard
        name="Siddharth Chandra Prabhakar"
        role="Medical Lead"
        image="siddharth_prabhakar.jpg"
        phone="1234567890"
        instagram="#"
        linkedin="#"
        email="siddharth@example.com"
      />
      <p class="team-name">Medical</p>
    </div>
  </div>
</div>

