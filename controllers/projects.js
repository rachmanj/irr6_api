const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Project = require('../models/Project');

// @desc    Get all projects
// @route   GET /api/v1/projects
// @access  private
exports.getProjects = asyncHandler(async (req, res, next) => {
  const projects = await Project.find({});

  res.status(200).json({
    success: true,
    count: projects.length,
    data: projects,
  });
});

// @desc    Create new project
// @route   POST /api/v1/projects
// @access  private
exports.createProject = asyncHandler(async (req, res, next) => {
  const project = await Project.create(req.body);

  res.status(201).json({
    success: true,
    data: project,
  });
});

// @desc    Get single project
// @route   GET /api/v1/projects/:id
// @access  private
exports.getProject = asyncHandler(async (req, res, next) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return next(
      new ErrorResponse(`Project not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: project,
  });
});

// @desc    Update project
// @route   PUT /api/v1/projects/:id
// @access  private
exports.updateProject = asyncHandler(async (req, res, next) => {
  let project = await Project.findById(req.params.id);

  if (!project) {
    return next(new ErrorResponse(`Project not found`));
  }

  project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: project,
  });
});

// @desc    Delete project
// @route   DELETE /api/v1/projects/:id
// @access  private
exports.deleteProject = asyncHandler(async (req, res, next) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return next(new ErrorResponse(`Project not found`));
  }

  project.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});
