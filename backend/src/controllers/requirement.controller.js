import Requirement from "../models/requirement.model.js";

const allowedCategories = ["planner", "performer", "crew"];

export const createRequirement = async (req, res, next) => {
  try {
    const {
      event,
      category,
      details,
      additionalRequirements,
    } = req.body;

    if (!event) {
      return res.status(400).json({
        success: false,
        message: "Event details are required",
      });
    }

    if (!category) {
      return res.status(400).json({
        success: false,
        message: "Category is required",
      });
    }

    if (!allowedCategories.includes(category)) {
      return res.status(400).json({
        success: false,
        message: "Category must be planner, performer, or crew",
      });
    }

    if (!details || typeof details !== "object") {
      return res.status(400).json({
        success: false,
        message: "Category details are required",
      });
    }

    const {
      name,
      type,
      startDate,
      endDate,
      location,
    } = event;

    if (!name || !type || !startDate || !endDate || !location) {
      return res.status(400).json({
        success: false,
        message:
          "Event name, type, start date, end date, and location are required",
      });
    }

    const parsedStartDate = new Date(startDate);
    const parsedEndDate = new Date(endDate);

    if (
      Number.isNaN(parsedStartDate.getTime()) ||
      Number.isNaN(parsedEndDate.getTime())
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid event date",
      });
    }

    if (parsedEndDate < parsedStartDate) {
      return res.status(400).json({
        success: false,
        message: "End date cannot be before start date",
      });
    }

    const requirement = await Requirement.create({
      event: {
        ...event,
        startDate: parsedStartDate,
        endDate: parsedEndDate,
      },
      category,
      details,
      additionalRequirements: additionalRequirements || {},
    });

    return res.status(201).json({
      success: true,
      message: "Requirement created successfully",
      data: requirement,
    });
  } catch (error) {
    next(error);
  }
};