//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();

// Add your routes here
router.post("/removal-answer-addback", function (request, response) {
  var removalReason = request.session.data["removal-reason"];
  if (removalReason == "Admitted from abroad with English not first language") {
    response.redirect("pupil-addback/first-language");
  } else if (
    removalReason ==
    "Completed KS4 studies this academic year in year 11 at another school or college"
  ) {
    response.redirect("pupil-addback/dfe-number");
  } else if (removalReason == "Deceased") {
    response.redirect("pupil-addback/deceased");
  } else if (removalReason == "Permanently left England") {
    response.redirect("pupil-addback/left-england-date");
  }
});

router.post("/admission-routing", function (request, response) {
  var admissionDate = request.session.data["admissionDate"];
  if (admissionDate == "yes") {
    response.redirect("pupil-addback/recommendations-journey/abroad-firstlanguage-summary-yes");
  } else if (admissionDate == "no") {
    response.redirect("pupil-addback/recommendations-journey/admission-date");
  }
});

router.post("/removal-answer-yes-independent", function (request, response) {
  var removalReason = request.session.data["removal-reason"];
  if (removalReason == "Admitted from abroad with English not first language") {
    response.redirect("independent/first-language");
  } else if (removalReason == "Merge pupils") {
    response.redirect("independent/merged-pupil");
  } else if (
    removalReason == "Social care involvement - including police or prison"
  ) {
    response.redirect("independent/social-care-involvement");
  } else if (removalReason == "Terminal or critical illness") {
    response.redirect("independent/terminal-diagnosed");
  } else if (removalReason == "Year group change") {
    response.redirect("independent/year-group-higherlower");
  }
});

router.post("/on-roll-independent", function (request, response) {
  var onRoll = request.session.data["on-roll"];
  if (onRoll == "yes") {
    response.redirect("independent/removal-reason-yes");
  } else if (onRoll == "no") {
    response.redirect("independent/removal-reason-no");
  }
});
router.post("/yeargroup-independent", function (request, response) {
  var higherLower = request.session.data["higher-lower"];
  if (higherLower == "higher") {
    response.redirect("independent/year-group-higher");
  } else if (higherLower == "lower") {
    response.redirect("independent/year-group-lower");
  }
});

router.post("/pupil-addback-request", function (request, response) {
  var createRequest = request.session.data["createRequest"];
  if (createRequest == "yes") {
    response.redirect("pupil-addback/select-student-removed");
  } else if (createRequest == "no") {
    response.redirect("pupil-addback/no-request-summary");
  }
});

router.post("/pupil-independent", function (request, response) {
  var createRequest = request.session.data["createRequest"];
  if (createRequest == "yes") {
    response.redirect("independent/select-student-removed");
  } else if (createRequest == "no") {
    response.redirect("independent/no-request-summary");
  }
});
