<script>
    import MemberCard from './MemberCard.svelte'; // Adjust the path as necessary
    import shibu from '$lib/assets/images/shibu.jpg';
  </script>
  
  <style>
    .coordinator-container {
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
      color: #d4af37; /* Gold color for section headings */
    }
  
    .member-cards {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px; /* Space between member cards */
    }
  </style>
  
  <div class="coordinator-container">
    <div class="team-level">
      <h2>Secretaries</h2>
      <div class="member-cards">
        <MemberCard name="Anup Prasad" image="anup_prasad.jpg" phone="1234567890" instagram="#" linkedin="#" email="anup@example.com" />
        <MemberCard name="Shibu Kumar" image="shibu.webp" phone="1234567890" instagram="#" linkedin="#" email="shibu@example.com" />
      </div>
    </div>
  
    <div class="team-level">
      <h2>Convenors</h2>
      <div class="member-cards">
        <MemberCard name="Sharim Fahran" image="sharim_fahran.jpg" phone="1234567890" instagram="#" linkedin="#" email="sharim@example.com" />
        <MemberCard name="Anshika Rana" image="anshika_rana.jpg" phone="1234567890" instagram="#" linkedin="#" email="anshika@example.com" />
      </div>
    </div>
  
    <div class="team-level">
      <h2>Joint Secretaries</h2>
      <div class="member-cards">
        <MemberCard name="Raj Kumar Prasad" image="raj_kumar_prasad.jpg" phone="1234567890" instagram="#" linkedin="#" email="raj@example.com" />
        <MemberCard name="Vidhi Verma" image="vidhi_verma.jpg" phone="1234567890" instagram="#" linkedin="#" email="vidhi@example.com" />
        <MemberCard name="Dhanraj Siddh" image="dhanraj_siddh.jpg" phone="1234567890" instagram="#" linkedin="#" email="dhanraj@example.com" />
        <MemberCard name="Ankit Patel" image="ankit_patel.jpg" phone="1234567890" instagram="#" linkedin="#" email="ankit@example.com" />
      </div>
    </div>
  
    <div class="team-level">
      <h2>Associate Treasurers</h2>
      <div class="member-cards">
        <MemberCard name="Khushi Kumari Chaurasia" image="khushi_kumari.jpg" phone="1234567890" instagram="#" linkedin="#" email="khushi@example.com" />
        <MemberCard name="Ujjwal Kr Rajak" image="ujjwal_rajak.jpg" phone="1234567890" instagram="#" linkedin="#" email="ujjwal@example.com" />
        <MemberCard name="Chandan Gautam" image="chandan_gautam.jpg" phone="1234567890" instagram="#" linkedin="#" email="chandan@example.com" />
        <MemberCard name="Priyanshu Raj" image="priyanshu_raj.jpg" phone="1234567890" instagram="#" linkedin="#" email="priyanshu@example.com" />
      </div>
    </div>
  </div>
  