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
router.post("/pupil-onroll-independent", function (request, response) {
  var createRequest = request.session.data["createRequest"];
  if (createRequest == "yes") {
    response.redirect("independent/select-student-removed");
  } else if (createRequest == "no") {
    response.redirect("independent/no-request-summary");
  }
});

//removal reason
router.post("/removal-answer-onroll-independent", function (request, response) {
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
    response.redirect("independent/index-terminalcritical");
  } else if (removalReason == "Year group change") {
    response.redirect("independent/year-group-move");
  }
});

//pupil on roll
router.post("/onroll-independent", function (request, response) {
  var onRoll = request.session.data["on-roll"];
  if (onRoll == "yes") {
    response.redirect("independent/removal-reason-yes");
  } else if (onRoll == "no") {
    response.redirect("independent-offroll/index");
  }
});

//higher or lower yeargroup
router.post("/yeargroup-onroll-independent", function (request, response) {
  var higherLower = request.session.data["year-group-change"];
  if (
    higherLower == "year 8" ||
    higherLower == "year 9" ||
    higherLower == "year 10"
  ) {
    response.redirect("independent/year-group-lower");
  } else if (higherLower == "year 12" || higherLower == "year 13") {
    response.redirect("independent/year-group-higher");
  }
});

// INDEPENDENT AND OFF ROLL

//create a request
router.post("/pupil-offroll-independent", function (request, response) {
  var createRequest = request.session.data["createRequest"];
  if (createRequest == "yes") {
    response.redirect("independent-offroll/select-student-removed");
  } else if (createRequest == "no") {
    response.redirect("independent-offroll/no-request-summary");
  }
});

//pupil on roll
router.post("/offroll-independent", function (request, response) {
  var onRoll = request.session.data["on-roll"];
  if (onRoll == "yes") {
    response.redirect("independent/index");
  } else if (onRoll == "no") {
    response.redirect("independent-offroll/removal-reason-no");
  }
});

//removal reason
router.post(
  "/removal-answer-offroll-independent",
  function (request, response) {
    var removalReason = request.session.data["removal-reason"];
    if (removalReason == "Deceased") {
      response.redirect("independent-offroll/deceased");
    } else if (removalReason == "Elective home education") {
      response.redirect("independent-offroll/home-education");
    } else if (removalReason == "Not on roll") {
      response.redirect("independent-offroll/previously-onroll");
    } else if (removalReason == "Permanently excluded from current school") {
      response.redirect("independent-offroll/permanent-exclusion");
    } else if (removalReason == "Permanently left England") {
      response.redirect("independent-offroll/left-england-date");
    } else if (removalReason == "Missing in education") {
      response.redirect("independent-offroll/missing-education");
    }
  }
);
