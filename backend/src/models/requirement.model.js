import mongoose from "mongoose";

const requirementSchema = new mongoose.Schema(
  {
    event: {
      name: {
        type: String,
        required: [true, "Event name is required"],
        trim: true,
      },

      type: {
        type: String,
        required: [true, "Event type is required"],
        trim: true,
      },

      startDate: {
        type: Date,
        required: [true, "Event start date is required"],
      },

      endDate: {
        type: Date,
        required: [true, "Event end date is required"],
      },

      location: {
        type: String,
        required: [true, "Event location is required"],
        trim: true,
      },

      venue: {
        type: String,
        trim: true,
        default: "",
      },
    },

    category: {
      type: String,
      required: [true, "Category is required"],
      enum: {
        values: ["planner", "performer", "crew"],
        message: "Category must be planner, performer, or crew",
      },
    },

    details: {
      type: mongoose.Schema.Types.Mixed,
      required: [true, "Category details are required"],
      default: {},
    },

    additionalRequirements: {
      technicalRequirements: {
        type: String,
        trim: true,
        default: "",
      },

      specialRequests: {
        type: String,
        trim: true,
        default: "",
      },

      notes: {
        type: String,
        trim: true,
        default: "",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Requirement = mongoose.model("Requirement", requirementSchema);

export default Requirement;