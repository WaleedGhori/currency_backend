import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    location: {
      type: String,
    },
    teamName: {
      type: String,
    },
    shareLink: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    password: {
      type: String,
    },
    refreshToken: {
      type: String,
      default: null,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpire: {
      type: Date,
    },
    status: {
      type: Boolean,
      default: false,
    },
    onAndOffNotification: {
      type: Boolean,
      default: false,
    },
    leagueInvitations: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "League",
      },
    ],
    leagues: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "League",
      },
    ],
    myWeeklyPicks: {
      pick: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "WeeklyPick",
      },
      pickedAt: {
        type: Date,
      },
    },
    weeklyPicks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "WeeklyPick",
      },
    ],
    rewards: {
      rewardChallangeWin: {
        type: Number,
        default: 0,
      },
      voteAginstTribleCouncil: {
        type: Number,
        default: 0,
      },
      immunityChallangeWin: {
        type: Number,
        default: 0,
      },
      totalConfessional: {
        type: Number,
        default: 0,
      },
      idolsPlayed: {
        type: Number,
        default: 0,
      },
      rewardEnterTime: {
        type: Date,
        default: Date.now,
      },
    },
    point: {
      type: Number,
      default: 0,
    },
    Eliminated: {
      markEliminated: {
        type: Boolean,
        enum: [true, false],
        default: false,
      },
      eliminatedTime: {
        type: Date,
        default: Date.now,
      },
    },
    age: {
      type: String,
    },
    hometown: {
      type: String,
    },
    occupation: {
      type: String,
    },
    weeks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Week",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;