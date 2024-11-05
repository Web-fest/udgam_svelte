<script>
    // Schedule data as an array of day-wise events
    const scheduleData = [
      {
        day: "Day 0",
        events: [
          { time: "15:30 - 17:30", name: "Wall Painting Selection", details: "" },
          { time: "15:30 - 17:30", name: "Dance Competition", details: "Creative Workshop" },
          { time: "15:30 - 17:30", name: "Mural Design", details: "Design Competition" }
        ]
      },
      {
        day: "Day 1",
        events: [
          { time: "10:00 - 13:00", name: "BGMI", details: "" },
          { time: "10:00 - 12:00", name: "Movie Trivia", details: "" },
          { time: "9:30 - 12:00", name: "Singing Competition Selection", details: "" },
          { time: "14:00 - 17:00", name: "Free Fire Max", details: "" },
          { time: "14:00 - 17:00", name: "Rangoli Competition", details: "" },
          { time: "18:30 - 21:00", name: "Instrument Playing Competition", details: "" },
          { time: "18:00 - 23:00", name: "Cultural Night", details: "" }
        ]
      },
      {
        day: "Day 2",
        events: [
          { time: "10:00 - 12:30", name: "Treasure Hunt", details: "" },
          { time: "10:00 - 13:00", name: "BGMI", details: "" },
          { time: "14:00 - 17:30", name: "Auction", details: "" },
          { time: "15:00 - 18:00", name: "Mobile Legends", details: "" },
          { time: "17:00 - 18:00", name: "Short Film Display", details: "" },
          { time: "18:00 - 23:00", name: "Cultural Night", details: "" }
        ]
      },
      {
        day: "Day 3",
        events: [
          { time: "10:00 - 12:00", name: "Squid Games", details: "" },
          { time: "9:00 - 12:00", name: "Movie Spoof", details: "" },
          { time: "12:00 - 13:10", name: "Balloon Breaking", details: "" },
          { time: "13:00 - 15:00", name: "CSGO", details: "" },
          { time: "15:00 - 18:00", name: "Food Fiesta", details: "" },
          { time: "16:00 - 17:00", name: "Leg Tie", details: "" },
          { time: "18:00 - 23:00", name: "Cultural Night", details: "" }
        ]
      }
    ];
  </script>
  
 <div class="container">
  <div class="schedule-container">
    <h1> Day-Wise Schedule</h1>
    <div class="days-row">
      {#each scheduleData as dayData}
        <div class="day">
          <h2>{dayData.day}</h2>
          {#each dayData.events as event}
            <div class="event">
              <div class="event-time">{event.time}</div>
              <div class="event-name">{event.name}</div>
              <div class="event-details">{event.details}</div>
            </div>
          {/each}
        </div>
      {/each}
    </div>
  </div>
</div>

  <style>
    /* Reset and basic styling */
  
 .container {
    font-family: 'Cinzel', serif;
    background: linear-gradient(135deg, #0c0f29, #214355);
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
    overflow-x: hidden;
  }
  
  /* Schedule container */
  .schedule-container {
    width: 100%;
    max-width: 1400px;
    text-align: center;
    border-radius: 15px;
    padding: 20px;
    background: rgba(0, 0, 0, 0.6);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
    animation: fadeIn 1s ease-in-out;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #d4af37;
    font-weight: bold;
    letter-spacing: 1px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    animation: fadeDown 1s ease-out;
  }
  
  /* Flex layout for days */
  .days-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  
  .day {
    background: linear-gradient(145deg, #4a4a72, #1e1e36);
    padding: 20px;
    border-radius: 12px;
    min-width: 200px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
    animation: slideUp 0.8s ease forwards;
    opacity: 0;
  }
  
  .day:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.6);
  }
  
  /* Day title */
  .day h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
    color: #00FFAB;
    font-weight: 700;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  }
  
  /* Event styling */
  .event {
    background: rgba(255, 255, 255, 0.1);
    margin: 10px 0;
    padding: 15px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: start;
    transition: background 0.3s ease, transform 0.3s ease;
    opacity: 0;
    animation: fadeInUp 1s ease forwards;
    transform: translateY(20px);
  }
  
  .event:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(5px);
  }
  
  .event-time {
    font-weight: bold;
    color: #FFC107;
    margin-bottom: 5px;
  }
  
  .event-name {
    font-size: 1.2rem;
    color: #FFFFFF;
    font-weight: 600;
    margin-bottom: 3px;
  }
  
  .event-details {
    font-size: 0.9rem;
    color: #CCCCCC;
    font-style: italic;
  }
  
  /* Responsive Design */
  @media (max-width: 1200px) {
    .days-row {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 768px) {
    .days-row {
      grid-template-columns: 1fr;
    }
  
    .day {
      width: 100%;
    }
  }
  
  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes fadeDown {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  </style>