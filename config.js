// ============================================================
// 🔧 PUNTERS CLUB CONFIG - Edit this file weekly 🔧
// ============================================================
// Tip: Use admin.html to generate this file via a form instead
// of editing by hand.
// ============================================================
// This club has TWO pickers per week (sequential pairs wrapping
// through the rotation list). Each picker submits their own bet.
// ============================================================

const CONFIG = {

  // 📅 START DATE - The Sunday Week 1 starts
  // Format: Year, Month (0-11 — January is 0!), Day
  startDate: new Date(2026, 4, 4), // Sunday 4 May 2026 (placeholder)

  // 💰 Total amount in the kitty
  kitty: 0.00,

  // 🎯 THIS WEEK'S BETS - one per picker (UPDATE WHEN PICKERS CHOOSE)
  // bets[0] = first picker's bet, bets[1] = second picker's bet
  bets: [
    {
      description: "No bet placed yet",
      odds: 0
    },
    {
      description: "No bet placed yet",
      odds: 0
    }
  ],

  // Stake per week (per bet — so total weekly stake from kitty is 2× this)
  stake: 50,

  // Member payment status - true if paid, false if not
  members: {
    "Whip": false,
    "Deeks": false,
    "Kingy": false,
    "Pottsy": false,
    "Slug": false,
    "Sauce": false,
    "Pecka": false,
    "Nutty": false,
    "Hutto": false,
    "Baz": false,
    "Pooch": false,
    "Cal": false,
    "Ragsy": false
  },

  // Rotation order - PAIRS of two pick each week sequentially.
  // Wraps around so everyone keeps picking forever.
  // Week 1 = members[0] + members[1], Week 2 = members[2] + members[3], etc.
  rotation: ["Whip", "Deeks", "Kingy", "Pottsy", "Slug", "Sauce", "Pecka", "Nutty", "Hutto", "Baz", "Pooch", "Cal", "Ragsy"],

  // Notes / announcements (leave empty "" for no notes)
  notes: "$50 per week. Bank details: BSB XXX-XXX ACC XXXXXXXX",

  // 📜 PAST BETS HISTORY - each week has two bets (one per picker)
  // Format per week: { bets: [{ bet: "...", odds: 1.90, result: "win"|"loss"|"pending" }, { bet: "...", odds: 2.50, result: "win"|"loss"|"pending" }] }
  pastBets: [
    // No past bets yet — first results will be added at the end of Week 1
  ],

  // Last updated date (for footer display)
  lastUpdated: ""
};
