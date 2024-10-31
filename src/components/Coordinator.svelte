<script>
    import MemberCard from './MemberCard.svelte'; // Adjust the path as necessary
    import shibu from '$lib/assets/images/shibu.webp';
    import anup from '$lib/assets/images/anup.webp';
    import anshika from '$lib/assets/images/anshika.webp';
    import sharim from '$lib/assets/images/sharim.webp';
    import prithwish from '$lib/assets/images/prithwish.webp';
    import dhanraj from '$lib/assets/images/dhanraj.webp';
    import raj from '$lib/assets/images/raj.webp';
    import ankit from '$lib/assets/images/ankit.webp';
    import vidhi from '$lib/assets/images/vidhi.webp';
    import chandan from '$lib/assets/images/chandan.webp';
    import ujjwal from '$lib/assets/images/ujjwal.webp';
    import khushi from '$lib/assets/images/temp.webp';
    import priyanshu from '$lib/assets/images/priyanshu.webp';
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
        <MemberCard name="Anup Prasad" image={anup} phone="+918670658854" instagram="https://www.instagram.com/up_an_anup/profilecard/?igsh=MWhmNXQyaXJmdnF4NQ==" linkedin="https://www.linkedin.com/in/anup-prasad-640aa130b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" email="b220045@nitsikkim.ac.in" />
        <MemberCard name="Shibu Kumar" image={shibu} phone="+919508355782" instagram="https://www.instagram.com/br04_shibu/profilecard/?igsh=MWNiczMwanUyZGlndQ==" linkedin="https://www.linkedin.com/in/shibu-kumar-3837b427b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" email="b220149@nitsikkim.ac.in" />
      </div>
    </div>
  
    <div class="team-level">
      <h2>Convenors</h2>
      <div class="member-cards">
        <MemberCard name="Sharim Fahran" image={sharim} phone="+919564103801" instagram="https://www.instagram.com/sha_rim21?igsh=YjIzb3N2d2J5dWI=" linkedin="https://www.linkedin.com/in/sharim-farhan-414094294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" email="b220020@nitsikkim.ac.in" />
        <MemberCard name="Anshika Rana" image={anshika} phone="+919350115477"instagram="https://www.instagram.com/ " linkedin=" https://www.linkedin.com/in/anshika-rana-5a919b253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
" email="b220005@nitsikkim.ac.in" />
      </div>
    </div>
  
    <div class="team-level">
      <h2>Joint Secretaries</h2>
      <div class="member-cards">
        <MemberCard name="Prithwish Mukhopadhyay" image={prithwish} phone="+919679050444" instagram="https://www.instagram.com/p.r.i.t.h.w.i.s.h_7/profilecard/?igsh=bHlzcW5xenZpbzcx"  email="b220088@nitsikkim.ac.in" />
        <MemberCard name="Raj Kumar Prasad" image={raj} phone="+919883936360" instagram="https://www.instagram.com/rajpd_3567/profilecard/?igsh=b3F0MGRvZzlwZGFz" linkedin="https://www.linkedin.com/in/rajkrprasad3344/" email="b220025@nitsikkim.ac.in" />
        <MemberCard name="Vidhi Verma" image={vidhi} phone="+917850092438" instagram="https://www.instagram.com/._vidhzz._12?igsh=MW1ydmQ2bWEwYXp1cQ==" linkedin="https://www.linkedin.com/in/vidhi-verma-8a4976285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" email="b220038@nitsikkim.ac.in" />
        <MemberCard name="Dhanraj Siddh" image={dhanraj} phone="+919079959848" instagram="#" linkedin="#" email="dhanraj@example.com" />
        <MemberCard name="Ankit Patel" image={ankit} phone="+919305700161" instagram="https://www.instagram.com/_.ankitpatel/profilecard/?igsh=ZjJmNmppazE4MnE0" linkedin="https://www.linkedin.com/in/ankit-patel-905624287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" email="b220097@nitsikkim.ac.in" />
      </div>
    </div>
  
    <div class="team-level">
      <h2>Associate Treasurers</h2>
      <div class="member-cards">
        <MemberCard name="Khushi Kumari Chaurasia" image={khushi} phone="1234567890" instagram="#" linkedin="#" email="khushi@example.com" />
        <MemberCard name="Ujjwal Kr Rajak" image={ujjwal} phone="1234567890" instagram="#" linkedin="#" email="ujjwal@example.com" />
        <MemberCard name="Chandan Gautam" image={chandan} phone="1234567890" instagram="#" linkedin="#" email="chandan@example.com" />
        <MemberCard name="Priyanshu Raj" image={priyanshu} phone="1234567890" instagram="#" linkedin="#" email="priyanshu@example.com" />
      </div>
    </div>
  </div>
  