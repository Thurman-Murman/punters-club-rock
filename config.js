// ============================================================
// 🔧 PUNTERS CLUB CONFIG - Edit this file weekly 🔧
// ============================================================
// Tip: Use admin.html to generate this file via a form instead
// of editing by hand.
// ============================================================

const CONFIG = {

  // 📅 START DATE - The Sunday Week 1 starts
  // Format: Year, Month (0-11 — January is 0!), Day
  // Example: Sunday 11th Jan 2026 = new Date(2026, 0, 11)
  startDate: new Date(2026, 0, 11),

  // 💰 Total amount in the kitty
  kitty: 0.00,

  // 🎯 THIS WEEK'S BET (UPDATE WHEN PICKER CHOOSES)
  bet: {
    description: "No bet placed yet — picker to choose",
    odds: 0
  },

  // Stake per week (per member)
  stake: 50,

  // Member payment status - true if paid, false if not
  // Add as many or as few members as you need
  members: {
    "Member 1": false,
    "Member 2": false,
    "Member 3": false,
    "Member 4": false,
    "Member 5": false,
    "Member 6": false,
    "Member 7": false,
    "Member 8": false,
    "Member 9": false,
    "Member 10": false
  },

  // Rotation order - who picks each week (must match members above)
  rotation: ["Member 1", "Member 2", "Member 3", "Member 4", "Member 5", "Member 6", "Member 7", "Member 8", "Member 9", "Member 10"],

  // Any notes or announcements (leave empty "" for no notes)
  notes: "$50 per week. Bank details: BSB XXX-XXX ACC XXXXXXXX",

  // 📜 PAST BETS HISTORY (Add each week's result here)
  // Format: { bet: "description", odds: 1.90, result: "win" | "loss" | "pending" }
  // Week 1 = first item, Week 2 = second item, etc.
  pastBets: [
    // No past bets yet — first one will be added at the end of Week 1
  ],

  // Last updated date (for your reference)
  lastUpdated: ""
};
