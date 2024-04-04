//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();

// PUPIL ADDBACK

//create a request
router.post("/pupil-addback-request", function (request, response) {
  var createRequest = request.session.data["createRequest"];
  if (createRequest == "yes") {
    response.redirect("pupil-addback/select-student-removed");
  } else if (createRequest == "no") {
    response.redirect("pupil-addback/no-request-summary");
  }
});

//removal reason
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

//if admission date is the same - recommendation journey
router.post("/admission-routing-addback", function (request, response) {
  var admissionDate = request.session.data["admissionDate"];
  if (admissionDate == "yes") {
    response.redirect(
      "pupil-addback/recommendations-journey/abroad-firstlanguage-summary-yes"
    );
  } else if (admissionDate == "no") {
    response.redirect("pupil-addback/recommendations-journey/admission-date");
  }
});

// INDEPENDENT AND ON ROLL

//create a request
router.post("/pupil-independent", function (request, response) {
  var createRequest = request.session.data["createRequest"];
  if (createRequest == "yes") {
    response.redirect("independent/select-student-removed");
  } else if (createRequest == "no") {
    response.redirect("independent/no-request-summary");
  }
});

//removal reason
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

//pupil on roll
router.post("/on-roll-independent", function (request, response) {
  var onRoll = request.session.data["on-roll"];
  if (onRoll == "yes") {
    response.redirect("independent/removal-reason-yes");
  } else if (onRoll == "no") {
    response.redirect("independent/removal-reason-no");
  }
});

//diagnosed with a critical illness for 12 months or more
router.post(
  "/critical-illness-onroll-independent",
  function (request, response) {
    var criticalIllness = request.session.data["critical-illness"];
    if (criticalIllness == "yes") {
      response.redirect("independent/illness-injury-yes");
    } else if (criticalIllness == "no") {
      response.redirect("independent/illness-injury-no");
    }
  }
);

//no to critical illness - diagnosis of a life changing illness or a recent life changing injury
router.post(
  "/illness-injury-no-onroll-independent",
  function (request, response) {
    var illnessInjury = request.session.data["illness-injury"];
    if (illnessInjury == "yes") {
      response.redirect("independent/access-education-yes");
    } else if (illnessInjury == "no") {
      response.redirect("independent/sat-exams-terminal-no");
    }
  }
);

//higher or lower yeargroup
router.post("/yeargroup-independent", function (request, response) {
  var higherLower = request.session.data["higher-lower"];
  if (higherLower == "higher") {
    response.redirect("independent/year-group-higher");
  } else if (higherLower == "lower") {
    response.redirect("independent/year-group-lower");
  }
});
