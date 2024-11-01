<script>
  import MemberCard from './MemberCard.svelte';
  import amrish from '$lib/assets/images/amrish.webp';
  import daksh from '$lib/assets/images/daksh.webp';
  import sanjeev from '$lib/assets/images/sanjeev.webp';
  import rahul from '$lib/assets/images/rahul.webp';
  import anurag from '$lib/assets/images/anurag.webp';
  import chunni from '$lib/assets/images/temp.webp';
  import sananla from '$lib/assets/images/sananla.webp';
  import roshan from '$lib/assets/images/roshan.webp';
  import manasvi from '$lib/assets/images/manasvi.webp';
  import fauzia from '$lib/assets/images/fauzia.webp';
  import rohan from '$lib/assets/images/rohan.webp';
  import me from '$lib/assets/images/me.webp';
  import vaibhav from '$lib/assets/images/vaibhav.webp';
  import vipin from '$lib/assets/images/vipin.webp';
  import aman from '$lib/assets/images/aman.webp';
  import navnit from '$lib/assets/images/navnit.webp';
  import aditya from '$lib/assets/images/aditya.webp';
  import prashant from '$lib/assets/images/prashant.webp';
  import siddharth from '$lib/assets/images/siddharthece.webp';




  const teamLeads = {
    conveyanceDiscipline: [
      {
        name: "Amrish Kumar",
        role: "Conveyance & Discipline Lead",
        image: amrish,
        phone: "+918972670603",
        instagram: "https://www.instagram.com/royamrish.18/",
        linkedin: "http://www.linkedin.com/in/amrish-kumar-594b80291",
        email: "b220003@nitsikkim .ac.in"
      },
      {
        name: "Daksh Bhardwaj",
        role: "Conveyance & Discipline Lead",
        image: daksh,
        phone: "+919084212312",
        instagram: "https://www.instagram.com/dakshbhardwaj12.23?igsh=cjNydmw5cHVzNW9p",
        linkedin: "https://www.linkedin.com/in/daksh-bhardwaj-001a43286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "b220049@nitsikkim.ac.in"
      },
      {
        name: "Sanjeev Kumar",
        role: "Conveyance & Discipline Lead",
        image: sanjeev,
        phone: "+919973689179",
        linkedin: "https://www.linkedin.com/in/sanjeev-kumar-singh-35b73732a/",
        email: "b220029@nitsikkim.ac.in"
      }
    ],
    marketing: [
      {
        name: "Rahul Kumar Prasad",
        role: "Marketing Lead",
        image: rahul,
        phone: "+919609789463",
        instagram: "https://www.instagram.com/therahulx05/profilecard/?igsh=MTFpZmoxYnF0cWtiNg==",
        linkedin: "https://www.linkedin.com/in/rahul-kumar-prasad-0a4abb287",
        email: "b220143@nitsikkim.ac.in"
      },
      {
        name: "Anurag Prasad",
        role: "Marketing Lead",
        image: anurag,
        phone: "+919933574670",
        instagram: "https://www.instagram.com/anurag_prasad_121/profilecard/?igsh=OTJ2NnUydXJ1cWxu",
        linkedin: "http://linkedin.com/in/anurag-prasad-a7a114269",
        email: "b220126@nitsikkim.ac.in"
      }
    ],
    cultural: [
      {
        name: "Chunni Zangmu Bhutia",
        role: "Cultural Lead",
        image: chunni,
        phone: "1234567890",
        instagram: "#",
        linkedin: "#",
        email: "b220100@nitsikkim.ac.in"
      },
      {
        name: "Sananla Butia",
        role: "Cultural Lead",
        image: sananla,
        phone: "+918101628605",
        instagram: "#",
        linkedin: "#",
        email: "b220028@nitsikkim.ac.in"
      }
    ],
    infrastructure: [
      {
        name: "Roshan Srivastava",
        role: "Infrastructure & Wind Up Lead",
        image: roshan,
        phone: "+918145100511",
        instagram: "https://www.instagram.com/roshann_8/",
        linkedin: "www.linkedin.com/in/roshan-srivastav",
        email: "b220062@nitsikkim.ac.in"
      },
      {
        name: "Manasvi Giri",
        role: "Infrastructure & Wind Up Lead",
        image: manasvi,
        phone: "+917865039344",
        instagram: "https://www.instagram.com/manasvi_giri_/",
        linkedin: "https://www.linkedin.com/in/manasvi-giri?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "b220054@nitsikkim.ac.in"
      }
    ],
    graphicsMerch: [
      {
        name: "Fauzia Arshad",
        role: "Graphics & Merchandise Lead",
        image: fauzia,
        phone: "+918252187051",
        instagram: "https://www.instagram.com/fauzia_arshad__/profilecard/?igsh=d2xpdjVicHd1OHJh",
        linkedin: "https://www.linkedin.com/in/fauzia-arshad-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "b220129@nitsikkim.ac.in"
      },
      {
        name: "Rohan Darjee",
        role: "Graphics & Merchandise Lead",
        image: rohan,
        phone: "+918597070431",
        instagram: "https://www.instagram.com/_rohan78.__?igsh=MTBrajg0ZTI1Z28zbQ==",
        linkedin: "https://www.linkedin.com/in/rohandarjee",
        email: "b220147@nitsikkim.ac.in"
      }
    ],
    
    singleLeads: [
      {
        name: "Aditya Sharma",
        role: "Web/App Dev Lead",
        image: me,
        phone: "1234567890",
        instagram: "https://www.instagram.com/adi.ty_a21/profilecard/?igsh=MXA0dWNicXg4OHV0OQ==",
        linkedin: "https://www.linkedin.com/in/adit23/",
        email: "b220041@nitsikkim.ac.in"
      },
      {
        name: "Vaibhav Mishra",
        role: "Sponsorship Lead",
        image: vaibhav,
        phone: "1234567890",
        instagram: "#",
        linkedin: "#",
        email: "vaibhav@example.com"
      },
      {
        name: "Vipin Mishra",
        role: "Events Lead",
        image: vipin,
        phone: "1234567890",
        instagram: "#",
        linkedin: "#",
        email: "vipin@example.com"
      },
      {
        name: "Amandeep",
        role: "Publicity Lead",
        image: aman,
        phone: "1234567890",
        instagram: "#",
        linkedin: "#",
        email: "amandeep@example.com"
      },
      {
        name: "Navnit Kr Sharma",
        role: "Content Lead",
        image: navnit,
        phone: "1234567890",
        instagram: "#",
        linkedin: "#",
        email: "navnit@example.com"
      },
  
      {
        name: "Aditya Prasad",
        role: "Technical Lead",
        image: aditya,
        phone: "1234567890",
        instagram: "#",
        linkedin: "#",
        email: "aditya_prasad@example.com"
      },
      {
        name: "Prashant Kumar",
        role: "Hospitality & Logistics Lead",
        image: prashant,
        phone: "1234567890",
        instagram: "#",
        linkedin: "#",
        email: "prashant@example.com"
      },
      {
        name: "Siddharth Chandra Prabhakar",
        role: "Medical Lead",
        image: siddharth,
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
  <h3 class="section-title">Other Leads</h3>
  <div class="team-leads">
    <div class="member-card">
      <MemberCard
        name="Aditya Sharma"
        role="Web/App Dev Lead"
        image= {me}
        phone="+919693557033"
        instagram="https://www.instagram.com/adi.ty_a21/profilecard/?igsh=MXA0dWNicXg4OHV0OQ=="
        linkedin="https://www.linkedin.com/in/adit23/"
        email="b220041@nitsikkim.ac.in"
      />
      <p class="team-name">Web/App Dev</p>
    </div>

    <div class="member-card">
      <MemberCard
        name="Vaibhav Mishra"
        role="Sponsorship Lead"
        image={vaibhav}
        phone="+919335090266"
        instagram="https://www.instagram.com/vaibhavmishra.___/profilecard/?igsh=N3hrMWUwOXFrdTBw"
        linkedin="http://linkedin.com/in/vaibhavmishra5"
        email="b220152@nitsikkim.ac.in"
      />
      <p class="team-name">Sponsorship</p>
    </div>
     
    <div class="member-card">
      <MemberCard
        name="Vipin Mishra"
        role="Events Lead"
        image= {vipin}
        phone="+918692934414"
        instagram="https://www.instagram.com/vmisha0135/profilecard/?igsh=NXhwaHhxeHZ4dnF3"
        linkedin="https://www.linkedin.com/in/vipin-545347km?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        email="b220021@nitsikkim.ac.in"
      />
      <p class="team-name">Events</p>
    </div>

    <div class="member-card">
      <MemberCard
        name="Amandeep"
        role="Publicity Lead"
        image= {aman}
        phone="+918933008021"
        instagram="https://www.instagram.com/amand33p_12/profilecard/?igsh=djU5NzZzdmZ6NXg2"
        linkedin="https://www.linkedin.com/in/amandeep-bharti-3b0123325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        email="b220042@nitsikkim.ac.in"
      />
      <p class="team-name">Publicity</p>
    </div>

    <div class="member-card">
      <MemberCard
        name="Navnit Kr Sharma"
        role="Content Lead"
        image= {navnit}
        phone="+918649844682"
        instagram="#"
        linkedin="http://www.linkedin.com/in/navnit-kr-sharma"
        email="b220137@nitsikkim.ac.in"
      />
      <p class="team-name">Content</p>
    </div>

    <div class="member-card">
      <MemberCard
        name="Aditya Prasad"
        role="Technical Lead"
        image= {aditya}
        phone="+917865923581"
        instagram="https://www.instagram.com/__pegasuss___/?hl=en"
        linkedin="https://www.linkedin.com/in/aditya-prasad-823363322/"
        email="b220123@nitsikkim.ac.in"
      />
      <p class="team-name">Technical</p>
    </div>

    <div class="member-card">
      <MemberCard
        name="Prashant Kumar"
        role="Hospitality & Logistics Lead"
        image={prashant}
        phone="+919641493140"
        linkedin="https://www.linkedin.com/in/prashant-kumar-1312132a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        email="b220087@nitsikkim.ac.in"
      />
      <p class="team-name">Hospitality & Logistics</p>
    </div>

    <div class="member-card">
      <MemberCard
        name="Siddharth Chandra Prabhakar"
        role="Medical Lead"
        image={siddharth}
        phone="+916294078488"
        instagram="https://www.instagram.com/thesiddhupaaji?igsh=emdhM2hqbGQ2OTk1"
        linkedin="https://www.linkedin.com/in/siddharth-chandra-prabhakar-895b83281/"
        email="b220065@nitsikkim.ac.in"
      />
      <p class="team-name">Medical</p>
    </div>
  </div>
</div>

