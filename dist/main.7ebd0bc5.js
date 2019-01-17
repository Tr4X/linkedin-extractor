// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"js/country-codes.ts":[function(require,module,exports) {
"use strict"; // based on https://github.com/lukes/ISO-3166-Countries-with-Regional-Codes/blob/master/all/all.json

exports.__esModule = true;
exports["default"] = [{
  name: 'Afghanistan',
  'alpha-2': 'AF'
}, {
  name: 'Åland Islands',
  'alpha-2': 'AX'
}, {
  name: 'Albania',
  'alpha-2': 'AL'
}, {
  name: 'Algeria',
  'alpha-2': 'DZ'
}, {
  name: 'American Samoa',
  'alpha-2': 'AS'
}, {
  name: 'Andorra',
  'alpha-2': 'AD'
}, {
  name: 'Angola',
  'alpha-2': 'AO'
}, {
  name: 'Anguilla',
  'alpha-2': 'AI'
}, {
  name: 'Antarctica',
  'alpha-2': 'AQ'
}, {
  name: 'Antigua and Barbuda',
  'alpha-2': 'AG'
}, {
  name: 'Argentina',
  'alpha-2': 'AR'
}, {
  name: 'Armenia',
  'alpha-2': 'AM'
}, {
  name: 'Aruba',
  'alpha-2': 'AW'
}, {
  name: 'Australia',
  'alpha-2': 'AU'
}, {
  name: 'Austria',
  'alpha-2': 'AT'
}, {
  name: 'Azerbaijan',
  'alpha-2': 'AZ'
}, {
  name: 'Bahamas',
  'alpha-2': 'BS'
}, {
  name: 'Bahrain',
  'alpha-2': 'BH'
}, {
  name: 'Bangladesh',
  'alpha-2': 'BD'
}, {
  name: 'Barbados',
  'alpha-2': 'BB'
}, {
  name: 'Belarus',
  'alpha-2': 'BY'
}, {
  name: 'Belgium',
  'alpha-2': 'BE'
}, {
  name: 'Belize',
  'alpha-2': 'BZ'
}, {
  name: 'Benin',
  'alpha-2': 'BJ'
}, {
  name: 'Bermuda',
  'alpha-2': 'BM'
}, {
  name: 'Bhutan',
  'alpha-2': 'BT'
}, {
  name: 'Bolivia (Plurinational State of)',
  'alpha-2': 'BO'
}, {
  name: 'Bonaire, Sint Eustatius and Saba',
  'alpha-2': 'BQ'
}, {
  name: 'Bosnia and Herzegovina',
  'alpha-2': 'BA'
}, {
  name: 'Botswana',
  'alpha-2': 'BW'
}, {
  name: 'Bouvet Island',
  'alpha-2': 'BV'
}, {
  name: 'Brazil',
  'alpha-2': 'BR'
}, {
  name: 'British Indian Ocean Territory',
  'alpha-2': 'IO'
}, {
  name: 'Brunei Darussalam',
  'alpha-2': 'BN'
}, {
  name: 'Bulgaria',
  'alpha-2': 'BG'
}, {
  name: 'Burkina Faso',
  'alpha-2': 'BF'
}, {
  name: 'Burundi',
  'alpha-2': 'BI'
}, {
  name: 'Cambodia',
  'alpha-2': 'KH'
}, {
  name: 'Cameroon',
  'alpha-2': 'CM'
}, {
  name: 'Canada',
  'alpha-2': 'CA'
}, {
  name: 'Cabo Verde',
  'alpha-2': 'CV'
}, {
  name: 'Cayman Islands',
  'alpha-2': 'KY'
}, {
  name: 'Central African Republic',
  'alpha-2': 'CF'
}, {
  name: 'Chad',
  'alpha-2': 'TD'
}, {
  name: 'Chile',
  'alpha-2': 'CL'
}, {
  name: 'China',
  'alpha-2': 'CN'
}, {
  name: 'Christmas Island',
  'alpha-2': 'CX'
}, {
  name: 'Cocos (Keeling) Islands',
  'alpha-2': 'CC'
}, {
  name: 'Colombia',
  'alpha-2': 'CO'
}, {
  name: 'Comoros',
  'alpha-2': 'KM'
}, {
  name: 'Congo',
  'alpha-2': 'CG'
}, {
  name: 'Congo (Democratic Republic of the)',
  'alpha-2': 'CD'
}, {
  name: 'Cook Islands',
  'alpha-2': 'CK'
}, {
  name: 'Costa Rica',
  'alpha-2': 'CR'
}, {
  name: "Côte d'Ivoire",
  'alpha-2': 'CI'
}, {
  name: 'Croatia',
  'alpha-2': 'HR'
}, {
  name: 'Cuba',
  'alpha-2': 'CU'
}, {
  name: 'Curaçao',
  'alpha-2': 'CW'
}, {
  name: 'Cyprus',
  'alpha-2': 'CY'
}, {
  name: 'Czech Republic',
  'alpha-2': 'CZ'
}, {
  name: 'Denmark',
  'alpha-2': 'DK'
}, {
  name: 'Djibouti',
  'alpha-2': 'DJ'
}, {
  name: 'Dominica',
  'alpha-2': 'DM'
}, {
  name: 'Dominican Republic',
  'alpha-2': 'DO'
}, {
  name: 'Ecuador',
  'alpha-2': 'EC'
}, {
  name: 'Egypt',
  'alpha-2': 'EG'
}, {
  name: 'El Salvador',
  'alpha-2': 'SV'
}, {
  name: 'Equatorial Guinea',
  'alpha-2': 'GQ'
}, {
  name: 'Eritrea',
  'alpha-2': 'ER'
}, {
  name: 'Estonia',
  'alpha-2': 'EE'
}, {
  name: 'Ethiopia',
  'alpha-2': 'ET'
}, {
  name: 'Falkland Islands (Malvinas)',
  'alpha-2': 'FK'
}, {
  name: 'Faroe Islands',
  'alpha-2': 'FO'
}, {
  name: 'Fiji',
  'alpha-2': 'FJ'
}, {
  name: 'Finland',
  'alpha-2': 'FI'
}, {
  name: 'France',
  'alpha-2': 'FR'
}, {
  name: 'French Guiana',
  'alpha-2': 'GF'
}, {
  name: 'French Polynesia',
  'alpha-2': 'PF'
}, {
  name: 'French Southern Territories',
  'alpha-2': 'TF'
}, {
  name: 'Gabon',
  'alpha-2': 'GA'
}, {
  name: 'Gambia',
  'alpha-2': 'GM'
}, {
  name: 'Georgia',
  'alpha-2': 'GE'
}, {
  name: 'Germany',
  'alpha-2': 'DE'
}, {
  name: 'Ghana',
  'alpha-2': 'GH'
}, {
  name: 'Gibraltar',
  'alpha-2': 'GI'
}, {
  name: 'Greece',
  'alpha-2': 'GR'
}, {
  name: 'Greenland',
  'alpha-2': 'GL'
}, {
  name: 'Grenada',
  'alpha-2': 'GD'
}, {
  name: 'Guadeloupe',
  'alpha-2': 'GP'
}, {
  name: 'Guam',
  'alpha-2': 'GU'
}, {
  name: 'Guatemala',
  'alpha-2': 'GT'
}, {
  name: 'Guernsey',
  'alpha-2': 'GG'
}, {
  name: 'Guinea',
  'alpha-2': 'GN'
}, {
  name: 'Guinea-Bissau',
  'alpha-2': 'GW'
}, {
  name: 'Guyana',
  'alpha-2': 'GY'
}, {
  name: 'Haiti',
  'alpha-2': 'HT'
}, {
  name: 'Heard Island and McDonald Islands',
  'alpha-2': 'HM'
}, {
  name: 'Holy See',
  'alpha-2': 'VA'
}, {
  name: 'Honduras',
  'alpha-2': 'HN'
}, {
  name: 'Hong Kong',
  'alpha-2': 'HK'
}, {
  name: 'Hungary',
  'alpha-2': 'HU'
}, {
  name: 'Iceland',
  'alpha-2': 'IS'
}, {
  name: 'India',
  'alpha-2': 'IN'
}, {
  name: 'Indonesia',
  'alpha-2': 'ID'
}, {
  name: 'Iran (Islamic Republic of)',
  'alpha-2': 'IR'
}, {
  name: 'Iraq',
  'alpha-2': 'IQ'
}, {
  name: 'Ireland',
  'alpha-2': 'IE'
}, {
  name: 'Isle of Man',
  'alpha-2': 'IM'
}, {
  name: 'Israel',
  'alpha-2': 'IL'
}, {
  name: 'Italy',
  'alpha-2': 'IT'
}, {
  name: 'Jamaica',
  'alpha-2': 'JM'
}, {
  name: 'Japan',
  'alpha-2': 'JP'
}, {
  name: 'Jersey',
  'alpha-2': 'JE'
}, {
  name: 'Jordan',
  'alpha-2': 'JO'
}, {
  name: 'Kazakhstan',
  'alpha-2': 'KZ'
}, {
  name: 'Kenya',
  'alpha-2': 'KE'
}, {
  name: 'Kiribati',
  'alpha-2': 'KI'
}, {
  name: "Korea (Democratic People's Republic of)",
  'alpha-2': 'KP'
}, {
  name: 'Korea (Republic of)',
  'alpha-2': 'KR'
}, {
  name: 'Kuwait',
  'alpha-2': 'KW'
}, {
  name: 'Kyrgyzstan',
  'alpha-2': 'KG'
}, {
  name: "Lao People's Democratic Republic",
  'alpha-2': 'LA'
}, {
  name: 'Latvia',
  'alpha-2': 'LV'
}, {
  name: 'Lebanon',
  'alpha-2': 'LB'
}, {
  name: 'Lesotho',
  'alpha-2': 'LS'
}, {
  name: 'Liberia',
  'alpha-2': 'LR'
}, {
  name: 'Libya',
  'alpha-2': 'LY'
}, {
  name: 'Liechtenstein',
  'alpha-2': 'LI'
}, {
  name: 'Lithuania',
  'alpha-2': 'LT'
}, {
  name: 'Luxembourg',
  'alpha-2': 'LU'
}, {
  name: 'Macao',
  'alpha-2': 'MO'
}, {
  name: 'Macedonia (the former Yugoslav Republic of)',
  'alpha-2': 'MK'
}, {
  name: 'Madagascar',
  'alpha-2': 'MG'
}, {
  name: 'Malawi',
  'alpha-2': 'MW'
}, {
  name: 'Malaysia',
  'alpha-2': 'MY'
}, {
  name: 'Maldives',
  'alpha-2': 'MV'
}, {
  name: 'Mali',
  'alpha-2': 'ML'
}, {
  name: 'Malta',
  'alpha-2': 'MT'
}, {
  name: 'Marshall Islands',
  'alpha-2': 'MH'
}, {
  name: 'Martinique',
  'alpha-2': 'MQ'
}, {
  name: 'Mauritania',
  'alpha-2': 'MR'
}, {
  name: 'Mauritius',
  'alpha-2': 'MU'
}, {
  name: 'Mayotte',
  'alpha-2': 'YT'
}, {
  name: 'Mexico',
  'alpha-2': 'MX'
}, {
  name: 'Micronesia (Federated States of)',
  'alpha-2': 'FM'
}, {
  name: 'Moldova (Republic of)',
  'alpha-2': 'MD'
}, {
  name: 'Monaco',
  'alpha-2': 'MC'
}, {
  name: 'Mongolia',
  'alpha-2': 'MN'
}, {
  name: 'Montenegro',
  'alpha-2': 'ME'
}, {
  name: 'Montserrat',
  'alpha-2': 'MS'
}, {
  name: 'Morocco',
  'alpha-2': 'MA'
}, {
  name: 'Mozambique',
  'alpha-2': 'MZ'
}, {
  name: 'Myanmar',
  'alpha-2': 'MM'
}, {
  name: 'Namibia',
  'alpha-2': 'NA'
}, {
  name: 'Nauru',
  'alpha-2': 'NR'
}, {
  name: 'Nepal',
  'alpha-2': 'NP'
}, {
  name: 'Netherlands',
  'alpha-2': 'NL'
}, {
  name: 'New Caledonia',
  'alpha-2': 'NC'
}, {
  name: 'New Zealand',
  'alpha-2': 'NZ'
}, {
  name: 'Nicaragua',
  'alpha-2': 'NI'
}, {
  name: 'Niger',
  'alpha-2': 'NE'
}, {
  name: 'Nigeria',
  'alpha-2': 'NG'
}, {
  name: 'Niue',
  'alpha-2': 'NU'
}, {
  name: 'Norfolk Island',
  'alpha-2': 'NF'
}, {
  name: 'Northern Mariana Islands',
  'alpha-2': 'MP'
}, {
  name: 'Norway',
  'alpha-2': 'NO'
}, {
  name: 'Oman',
  'alpha-2': 'OM'
}, {
  name: 'Pakistan',
  'alpha-2': 'PK'
}, {
  name: 'Palau',
  'alpha-2': 'PW'
}, {
  name: 'Palestine, State of',
  'alpha-2': 'PS'
}, {
  name: 'Panama',
  'alpha-2': 'PA'
}, {
  name: 'Papua New Guinea',
  'alpha-2': 'PG'
}, {
  name: 'Paraguay',
  'alpha-2': 'PY'
}, {
  name: 'Peru',
  'alpha-2': 'PE'
}, {
  name: 'Philippines',
  'alpha-2': 'PH'
}, {
  name: 'Pitcairn',
  'alpha-2': 'PN'
}, {
  name: 'Poland',
  'alpha-2': 'PL'
}, {
  name: 'Portugal',
  'alpha-2': 'PT'
}, {
  name: 'Puerto Rico',
  'alpha-2': 'PR'
}, {
  name: 'Qatar',
  'alpha-2': 'QA'
}, {
  name: 'Réunion',
  'alpha-2': 'RE'
}, {
  name: 'Romania',
  'alpha-2': 'RO'
}, {
  name: 'Russian Federation',
  'alpha-2': 'RU'
}, {
  name: 'Rwanda',
  'alpha-2': 'RW'
}, {
  name: 'Saint Barthélemy',
  'alpha-2': 'BL'
}, {
  name: 'Saint Helena, Ascension and Tristan da Cunha',
  'alpha-2': 'SH'
}, {
  name: 'Saint Kitts and Nevis',
  'alpha-2': 'KN'
}, {
  name: 'Saint Lucia',
  'alpha-2': 'LC'
}, {
  name: 'Saint Martin (French part)',
  'alpha-2': 'MF'
}, {
  name: 'Saint Pierre and Miquelon',
  'alpha-2': 'PM'
}, {
  name: 'Saint Vincent and the Grenadines',
  'alpha-2': 'VC'
}, {
  name: 'Samoa',
  'alpha-2': 'WS'
}, {
  name: 'San Marino',
  'alpha-2': 'SM'
}, {
  name: 'Sao Tome and Principe',
  'alpha-2': 'ST'
}, {
  name: 'Saudi Arabia',
  'alpha-2': 'SA'
}, {
  name: 'Senegal',
  'alpha-2': 'SN'
}, {
  name: 'Serbia',
  'alpha-2': 'RS'
}, {
  name: 'Seychelles',
  'alpha-2': 'SC'
}, {
  name: 'Sierra Leone',
  'alpha-2': 'SL'
}, {
  name: 'Singapore',
  'alpha-2': 'SG'
}, {
  name: 'Sint Maarten (Dutch part)',
  'alpha-2': 'SX'
}, {
  name: 'Slovakia',
  'alpha-2': 'SK'
}, {
  name: 'Slovenia',
  'alpha-2': 'SI'
}, {
  name: 'Solomon Islands',
  'alpha-2': 'SB'
}, {
  name: 'Somalia',
  'alpha-2': 'SO'
}, {
  name: 'South Africa',
  'alpha-2': 'ZA'
}, {
  name: 'South Georgia and the South Sandwich Islands',
  'alpha-2': 'GS'
}, {
  name: 'South Sudan',
  'alpha-2': 'SS'
}, {
  name: 'Spain',
  'alpha-2': 'ES'
}, {
  name: 'Sri Lanka',
  'alpha-2': 'LK'
}, {
  name: 'Sudan',
  'alpha-2': 'SD'
}, {
  name: 'Suriname',
  'alpha-2': 'SR'
}, {
  name: 'Svalbard and Jan Mayen',
  'alpha-2': 'SJ'
}, {
  name: 'Swaziland',
  'alpha-2': 'SZ'
}, {
  name: 'Sweden',
  'alpha-2': 'SE'
}, {
  name: 'Switzerland',
  'alpha-2': 'CH'
}, {
  name: 'Syrian Arab Republic',
  'alpha-2': 'SY'
}, {
  name: 'Taiwan, Province of China',
  'alpha-2': 'TW'
}, {
  name: 'Tajikistan',
  'alpha-2': 'TJ'
}, {
  name: 'Tanzania, United Republic of',
  'alpha-2': 'TZ'
}, {
  name: 'Thailand',
  'alpha-2': 'TH'
}, {
  name: 'Timor-Leste',
  'alpha-2': 'TL'
}, {
  name: 'Togo',
  'alpha-2': 'TG'
}, {
  name: 'Tokelau',
  'alpha-2': 'TK'
}, {
  name: 'Tonga',
  'alpha-2': 'TO'
}, {
  name: 'Trinidad and Tobago',
  'alpha-2': 'TT'
}, {
  name: 'Tunisia',
  'alpha-2': 'TN'
}, {
  name: 'Turkey',
  'alpha-2': 'TR'
}, {
  name: 'Turkmenistan',
  'alpha-2': 'TM'
}, {
  name: 'Turks and Caicos Islands',
  'alpha-2': 'TC'
}, {
  name: 'Tuvalu',
  'alpha-2': 'TV'
}, {
  name: 'Uganda',
  'alpha-2': 'UG'
}, {
  name: 'Ukraine',
  'alpha-2': 'UA'
}, {
  name: 'United Arab Emirates',
  'alpha-2': 'AE'
}, {
  name: 'United Kingdom of Great Britain and Northern Ireland',
  'alpha-2': 'GB'
}, {
  name: 'United States of America',
  'alpha-2': 'US'
}, {
  name: 'United States Minor Outlying Islands',
  'alpha-2': 'UM'
}, {
  name: 'Uruguay',
  'alpha-2': 'UY'
}, {
  name: 'Uzbekistan',
  'alpha-2': 'UZ'
}, {
  name: 'Vanuatu',
  'alpha-2': 'VU'
}, {
  name: 'Venezuela (Bolivarian Republic of)',
  'alpha-2': 'VE'
}, {
  name: 'Viet Nam',
  'alpha-2': 'VN'
}, {
  name: 'Virgin Islands (British)',
  'alpha-2': 'VG'
}, {
  name: 'Virgin Islands (U.S.)',
  'alpha-2': 'VI'
}, {
  name: 'Wallis and Futuna',
  'alpha-2': 'WF'
}, {
  name: 'Western Sahara',
  'alpha-2': 'EH'
}, {
  name: 'Yemen',
  'alpha-2': 'YE'
}, {
  name: 'Zambia',
  'alpha-2': 'ZM'
}, {
  name: 'Zimbabwe',
  'alpha-2': 'ZW'
}];
},{}],"js/converter.ts":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || Object.assign || function (t) {
  for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];

    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
  }

  return t;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;
/* exported onLinkedInLoad */

var country_codes_1 = __importDefault(require("./country-codes"));

;

var LinkedInToJsonResume =
/** @class */
function () {
  function LinkedInToJsonResume() {
    this.target = {};
  }

  LinkedInToJsonResume.prototype.getOutput = function () {
    // sort the object
    var propertyOrder = ['basics', 'work', 'volunteer', 'education', 'certifications', 'awards', 'publications', 'skills', 'languages', 'interests', 'references', 'projects'];
    var sortedTarget = {};

    for (var _a = 0, propertyOrder_1 = propertyOrder; _a < propertyOrder_1.length; _a++) {
      var p = propertyOrder_1[_a];

      if (p in this.target) {
        sortedTarget[p] = this.target[p];
      }
    }

    return sortedTarget;
  };

  LinkedInToJsonResume.prototype.getWorkExperienceTable = function (mainThis) {
    var table = document.getElementById("work-table");
    var headerRow = table.insertRow(-1);
    var headerDiv = document.createElement("th");
    headerDiv.innerHTML = "Period";
    headerRow.appendChild(headerDiv);
    var headerDiv2 = document.createElement("th");
    headerDiv2.innerHTML = "Company";
    headerRow.appendChild(headerDiv2);
    var headerDiv3 = document.createElement("th");
    headerDiv3.innerHTML = "Position";
    headerRow.appendChild(headerDiv3);
    var headerDiv4 = document.createElement("th");
    headerDiv4.innerHTML = "Summary";
    headerRow.appendChild(headerDiv4);

    var _loop_1 = function _loop_1() {
      var row = table.insertRow(-1);
      row.classList.add("work-row");
      var date = row.insertCell(0);
      var dateInput = document.createElement('input');
      dateInput.type = "text";
      dateInput.size = 25;
      dateInput.classList.add("work-date-input");
      dateInput.value = this_1.target.work[i]['date'];
      date.appendChild(dateInput);
      var company = row.insertCell(1);
      var companyInput = document.createElement('input');
      companyInput.type = "text";
      companyInput.size = 35;
      companyInput.classList.add("work-company-input");
      companyInput.value = this_1.target.work[i]['company'];
      company.appendChild(companyInput);
      var position = row.insertCell(2);
      var positionInput = document.createElement('input');
      positionInput.type = "text";
      positionInput.size = 35;
      positionInput.classList.add("work-position-input");
      positionInput.value = this_1.target.work[i]['position'];
      position.appendChild(positionInput);
      var summary = row.insertCell(3);
      var summaryInput = document.createElement('input');
      summaryInput.type = "text";
      summaryInput.size = 35;
      summaryInput.classList.add("work-summary-input");
      summaryInput.value = this_1.target.work[i]['summary'];
      summary.appendChild(summaryInput);
      var addProjectCell = row.insertCell(4);
      addBtn = document.createElement("BUTTON");
      addText = document.createTextNode("Add project");
      _this = this_1;
      var _i = i;
      addBtn.appendChild(addText);

      var onclick = function onclick() {
        //console.log(this.target);
        //console.log(_i);
        //console.log(_this.target);
        //console.log(_this.target.work[_i]['projects']);
        var project = prompt("Enter the name of the project", "");
        var accomplishments = prompt("Enter the accomplishments of the project", "");
        var technologies = prompt("Enter the technologies used in the project", "");
        if (project == null) project = '';
        if (accomplishments == null) accomplishments = '';
        if (technologies == null) technologies = ''; //_this.saveProject(i, project, accomplishments, technologies);

        _this.target.work[_i]['projects'].push(project);

        _this.target.work[_i]['accomplishments'].push(accomplishments);

        _this.target.work[_i]['technologies'].push(technologies);

        _this.cleanWorkTable();

        _this.getWorkExperienceTable(); //console.log(_this.target.work[_i]);

      };

      addBtn.addEventListener("click", onclick.bind(this_1));
      addProjectCell.appendChild(addBtn);
      var deleteCell = row.insertCell(5);
      btn = document.createElement("BUTTON");
      t = document.createTextNode("DELETE");
      btn.appendChild(t);
      btn.addEventListener("click", function () {
        row.style.display = 'none';
      });
      deleteCell.appendChild(btn);

      if (this_1.target.work[i]['projects'] != null && this_1.target.work[i]['projects'].length > 0) {
        var projectsTitleRow = table.insertRow(-1);
        projectsTitleRow.insertCell(0);
        var proTitleCell = projectsTitleRow.insertCell(1);
        var accTitleCell = projectsTitleRow.insertCell(2);
        var technoTitleCell = projectsTitleRow.insertCell(3);
        proTitleCell.innerHTML = 'Projects';
        proTitleCell.style.fontWeight = 'bold';
        proTitleCell.style.fontSyle = 'italic';
        accTitleCell.innerHTML = 'Accomplishments';
        accTitleCell.style.fontWeight = 'bold';
        accTitleCell.style.fontSyle = 'italic';
        technoTitleCell.innerHTML = 'Technologies';
        technoTitleCell.style.fontWeight = 'bold';
        technoTitleCell.style.fontSyle = 'italic';

        for (var j = 0; j < this_1.target.work[i]['projects'].length; j++) {
          var projectsRow = table.insertRow(-1);
          projectsRow.insertCell(0);
          projectsRow.id = i;
          projectsRow.classList.add("project-sub-row");
          projDiv = document.createElement("div");
          projDiv.innerHTML = this_1.target.work[i]['projects'][j];
          projDiv.classList.add("project-project-cell");
          var proCell = projectsRow.insertCell(1);
          proCell.appendChild(projDiv);
          accDiv = document.createElement("div");
          accDiv.innerHTML = this_1.target.work[i]['accomplishments'][j];
          accDiv.classList.add("project-accomplishment-cell");
          var accCell = projectsRow.insertCell(2);
          accCell.appendChild(accDiv);
          techDiv = document.createElement("div");
          techDiv.innerHTML = this_1.target.work[i]['technologies'][j];
          techDiv.classList.add("project-technologie-cell");
          var techCell = projectsRow.insertCell(3);
          techCell.appendChild(techDiv);
        }
      }
    };

    var this_1 = this,
        addBtn,
        addText,
        _this,
        btn,
        t,
        projDiv,
        accDiv,
        techDiv;

    for (var i = 0; i < this.target.work.length; i++) {
      _loop_1();
    }
  };

  LinkedInToJsonResume.prototype.saveProject = function (i, project, accomplishments, technologies) {
    this.target.work[i]['projects'].push(projects);
    this.target.work[i]['accomplishments'].push(accomplishments);
    this.target.work[i]['technologies'].push(technologies);
  };

  LinkedInToJsonResume.prototype.cleanWorkTable = function () {
    var workTable = document.getElementById("work-table");

    while (workTable.hasChildNodes()) {
      workTable.removeChild(workTable.firstChild);
    }
  };

  LinkedInToJsonResume.prototype.getLanguages = function () {
    var table = document.getElementById("languages-table");
    var headerRow = table.insertRow(-1);
    var headerDiv = document.createElement("th");
    headerDiv.innerHTML = "Language";
    headerRow.appendChild(headerDiv);
    var headerDiv2 = document.createElement("th");
    headerDiv2.innerHTML = "Fluency";
    headerRow.appendChild(headerDiv2);

    var _loop_2 = function _loop_2() {
      var row = table.insertRow(-1);
      row.classList.add("language-row");
      var langCell = row.insertCell(0);
      var lang = document.createElement("input");
      lang.type = "text";
      lang.size = 25;
      lang.classList.add("language-input");
      lang.value = this_2.target.languages[i]['language'];
      langCell.appendChild(lang);
      var fluencyCell = row.insertCell(1);
      var fluency = document.createElement("input");
      fluency.type = "text";
      fluency.size = 35;
      fluency.classList.add("language-fluency-input");
      fluency.value = this_2.target.languages[i]['fluency'];
      fluencyCell.appendChild(fluency);
      var deleteCell = row.insertCell(2);
      btn = document.createElement("BUTTON");
      t = document.createTextNode("DELETE");
      btn.appendChild(t);
      btn.addEventListener("click", function () {
        row.style.display = 'none';
      });
      deleteCell.appendChild(btn);
    };

    var this_2 = this,
        btn,
        t;

    for (var i = 0; i < this.target.languages.length; i++) {
      _loop_2();
    }
  };

  LinkedInToJsonResume.prototype.getSkills = function () {
    var table = document.getElementById("skills-table");

    var _loop_3 = function _loop_3() {
      var row = table.insertRow(-1);
      row.classList.add("skill-row");
      var skillCell = row.insertCell(0);
      var skill = document.createElement("input");
      skill.type = "text";
      skill.size = 35;
      skill.classList.add("skill-input");
      skill.value = this_3.target.skills[i]['name'];
      skillCell.appendChild(skill);
      var skillLevelCell = row.insertCell(1);
      selectList = document.createElement("select");
      selectList.classList.add("skill-level-select");
      selectList.value = this_3.target.skills[i]['level'];
      skillLevelCell.appendChild(selectList);

      for (var j = 1; j <= 5; j++) {
        option = document.createElement("option");
        option.value = j;
        option.text = j;

        if (this_3.target.skills[i]['level'] == j) {
          option.selected = true;
        } else {
          option.selected = false;
        }

        selectList.appendChild(option);
      }

      var deleteCell = row.insertCell(2);
      btn = document.createElement("BUTTON");
      t = document.createTextNode("DELETE");
      btn.appendChild(t);
      btn.addEventListener("click", function () {
        row.style.display = 'none';
      });
      deleteCell.appendChild(btn);
    };

    var this_3 = this,
        selectList,
        option,
        btn,
        t;

    for (var i = 0; i < this.target.skills.length; i++) {
      _loop_3();
    }
  };

  LinkedInToJsonResume.prototype.getEducation = function () {
    var table = document.getElementById("education-table");
    var headerRow = table.insertRow(-1);
    var headerDiv = document.createElement("th");
    headerDiv.innerHTML = "Period";
    headerRow.appendChild(headerDiv);
    var headerDiv2 = document.createElement("th");
    headerDiv2.innerHTML = "School";
    headerRow.appendChild(headerDiv2);
    var headerDiv3 = document.createElement("th");
    headerDiv3.innerHTML = "Certificate";
    headerRow.appendChild(headerDiv3);

    var _loop_4 = function _loop_4() {
      var row = table.insertRow(-1);
      row.classList.add("education-row");
      var dateCell = row.insertCell(0);
      var date = document.createElement("input");
      date.type = "text";
      date.size = 25;
      date.classList.add("education-date-input");
      date.value = this_4.target.education[i]['date'];
      dateCell.appendChild(date); //let skillLevelCell = row.insertCell(1);

      /*var selectList = document.createElement("select");
      selectList.classList.add("education-date-start-month-select");
      selectList.value = this.target.education[i]['level'];
      dateCell.appendChild(selectList);
             for (var j = 1; j <= 12; j++) {
          var option = document.createElement("option");
          option.value = j;
          option.text = j;
          if (this.target.education[i]['startMonth'] == j) {
            option.selected = true;
          } else  {
            option.selected = false;
          }
          selectList.appendChild(option);
      }*/

      var typeCell = row.insertCell(1);
      var type = document.createElement("input");
      type.type = "text";
      type.size = 35;
      type.classList.add("education-type-input");
      type.value = this_4.target.education[i]['studyType'];
      typeCell.appendChild(type);
      var typeCell = row.insertCell(1);
      var type = document.createElement("input");
      type.type = "text";
      type.size = 35;
      type.classList.add("education-school-input");
      type.value = this_4.target.education[i]['institution'];
      typeCell.appendChild(type);
      var deleteCell = row.insertCell(3);
      btn = document.createElement("BUTTON");
      t = document.createTextNode("DELETE");
      btn.appendChild(t);
      btn.addEventListener("click", function () {
        row.style.display = 'none';
      });
      deleteCell.appendChild(btn);
    };

    var this_4 = this,
        btn,
        t;

    for (var i = 0; i < this.target.education.length; i++) {
      _loop_4();
    }
  };

  LinkedInToJsonResume.prototype.getCertifications = function () {
    var table = document.getElementById("certifs-table");
    var headerRow = table.insertRow(-1);
    var headerDiv = document.createElement("th");
    headerDiv.innerHTML = "Period";
    headerRow.appendChild(headerDiv);
    var headerDiv2 = document.createElement("th");
    headerDiv2.innerHTML = "Certificate";
    headerRow.appendChild(headerDiv2);
    if (!this.target.certifications) this.target.certifications = [];

    var _loop_5 = function _loop_5() {
      var row = table.insertRow(-1);
      row.classList.add("certif-row");
      var dateCell = row.insertCell(0);
      var date = document.createElement("input");
      date.type = "text";
      date.size = 35;
      date.classList.add("certif-date-input");
      date.value = this_5.target.certifications[i]['date'];
      dateCell.appendChild(date);
      var nameCell = row.insertCell(1);
      var name = document.createElement("input");
      name.type = "text";
      name.size = 35;
      name.classList.add("certif-name-input");
      name.value = this_5.target.certifications[i]['name'];
      nameCell.appendChild(name);
      var deleteCell = row.insertCell(2);
      btn = document.createElement("BUTTON");
      t = document.createTextNode("DELETE");
      btn.appendChild(t);
      btn.addEventListener("click", function () {
        row.style.display = 'none';
      });
      deleteCell.appendChild(btn);
    };

    var this_5 = this,
        btn,
        t;

    for (var i = 0; i < this.target.certifications.length; i++) {
      _loop_5();
    }
  };

  LinkedInToJsonResume.prototype._extend = function (target, source) {
    target = target || {};
    Object.keys(source).forEach(function (key) {
      return target[key] = source[key];
    });
  };

  LinkedInToJsonResume.prototype.processProfile = function (source) {
    this.target.basics = this.target.basics || {};
    var ccItem = country_codes_1["default"].find(function (item) {
      return item.name === source.country;
    });
    var countryCode = '';

    if (ccItem) {
      countryCode = ccItem['alpha-2'];
    }

    this._extend(this.target.basics, {
      name: source.firstName + " " + source.lastName,
      firstName: "" + source.firstName,
      lastName: "" + source.lastName,
      label: source.headline,
      picture: '',
      email: '',
      phone: '',
      website: source.websites ? source.websites.split(',')[0].split(':').slice(1).join(':') : '',
      summary: source.summary,
      location: {
        address: source.address,
        postalCode: source.zipCode,
        city: source.location ? source.location.name : '',
        countryCode: countryCode,
        region: ''
      },
      profiles: source.twitterHandles ? [{
        network: 'Twitter',
        username: source.twitterHandles,
        url: "https://twitter.com/" + source.twitterHandles
      }] : []
    });
  };

  LinkedInToJsonResume.prototype.processEmail = function (source) {
    this.target.basics = this.target.basics || {};

    this._extend(this.target.basics, {
      email: source.address
    });
  };

  LinkedInToJsonResume.prototype.processPosition = function (source) {
    function processPosition(position) {
      var object = {
        company: position.companyName,
        position: position.title || '',
        website: '',
        startDate: "" + position.startDate,
        endDate: "" + position.endDate,
        summary: position.description,
        highlights: [''],
        projects: [],
        accomplishments: [],
        technologies: []
      };

      if (position.endDate) {
        object.endDate = "" + position.endDate;
        object.date = "" + position.startDate + " - " + ("" + position.endDate);
      } else {
        object.date = "" + position.startDate + " - now";
      }

      return object;
    }

    this.target.work = source.map(processPosition);
  };

  LinkedInToJsonResume.prototype.processEducation = function (source) {
    function processEducation(education) {
      var object = {
        institution: education.institution,
        area: '',
        studyType: education.degree,
        startDate: "" + education.startDate,
        endDate: "" + education.endDate,
        startMonth: "" + education.startDate.split('-')[0],
        startYear: "" + education.startDate.split('-')[1],
        gpa: '',
        courses: []
      };

      if (education.endDate) {
        object.endDate = "" + education.endDate;
        object.date = "" + education.startDate + " - " + ("" + education.endDate);
      } else {
        object.date = "" + education.startDate + " - now";
      }

      return object;
    }

    this.target.education = source.map(processEducation);
  };

  LinkedInToJsonResume.prototype.processCertification = function (source) {
    function processCertification(certification) {
      var object = {
        startDate: "" + certification.startDate,
        endDate: "" + certification.endDate,
        name: "" + certification.name
      };

      if (certification.endDate) {
        object.endDate = "" + certification.endDate;
        object.date = "" + certification.startDate + " - " + ("" + certification.endDate);
      } else {
        object.date = "" + certification.startDate + " - now";
      }

      return object;
    }

    this.target.certifications = source.map(processCertification);
  };

  LinkedInToJsonResume.prototype.processSkills = function (skills) {
    this.target.skills = skills.map(function (skill) {
      return {
        name: skill,
        level: 1,
        keywords: []
      };
    });
  };

  LinkedInToJsonResume.prototype.processLanguages = function (languages) {
    function cleanProficiencyString(proficiency) {
      proficiency = proficiency.toLowerCase().replace(/_/g, ' ');
      return proficiency[0].toUpperCase() + proficiency.substr(1);
    }

    this.target.languages = languages.map(function (language) {
      return {
        language: language.name,
        fluency: language.proficiency ? cleanProficiencyString(language.proficiency) : null
      };
    });
  };

  LinkedInToJsonResume.prototype.processReferences = function (references) {
    this.target.references = references.map(function (reference) {
      return {
        name: reference.recommenderFirstName + " " + reference.recommenderLastName + " - " + reference.recommenderCompany,
        reference: reference.recommendationBody
      };
    });
  };

  LinkedInToJsonResume.prototype.processInterests = function (interests) {
    this.target.interests = interests.map(function (interest) {
      return {
        name: interest,
        keywords: []
      };
    });
  };

  LinkedInToJsonResume.prototype.processProjects = function (projects) {
    this.target.projects = projects.map(function (project) {
      return __assign({
        name: project.title,
        startDate: "" + project.startDate,
        summary: project.description,
        url: project.url
      }, project.endDate ? {
        endDate: "" + project.endDate
      } : {});
    });
  };

  LinkedInToJsonResume.prototype.processPublications = function (publications) {
    this.target.publications = publications.map(function (publication) {
      return {
        name: publication.name,
        publisher: publication.publisher,
        releaseDate: publication.date,
        website: publication.url,
        summary: publication.description
      };
    });
  };

  return LinkedInToJsonResume;
}();

exports["default"] = LinkedInToJsonResume;
},{"./country-codes":"js/country-codes.ts"}],"../node_modules/parcel-bundler/src/builtins/_empty.js":[function(require,module,exports) {

},{}],"../node_modules/base64-js/index.js":[function(require,module,exports) {
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],"../node_modules/ieee754/index.js":[function(require,module,exports) {
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],"../node_modules/buffer/node_modules/isarray/index.js":[function(require,module,exports) {
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],"../node_modules/buffer/index.js":[function(require,module,exports) {

var global = arguments[3];
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

},{"base64-js":"../node_modules/base64-js/index.js","ieee754":"../node_modules/ieee754/index.js","isarray":"../node_modules/buffer/node_modules/isarray/index.js","buffer":"../node_modules/buffer/index.js"}],"js/file.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

var save = function () {
  // saveAs from https://gist.github.com/MrSwitch/3552985
  var saveAs = window.saveAs || (window.navigator.msSaveBlob ? function (b, n) {
    return window.navigator.msSaveBlob(b, n);
  } : false) || window.webkitSaveAs || window.mozSaveAs || window.msSaveAs || function () {
    // URL's
    window.URL = window.URL || window.webkitURL;

    if (!window.URL) {
      return false;
    }

    return function (blob, name) {
      var url = URL.createObjectURL(blob); // Test for download link support

      if ('download' in document.createElement('a')) {
        var a = document.createElement('a');
        a.setAttribute('href', url);
        a.setAttribute('download', name); // Create Click event

        var clickEvent = document.createEvent('MouseEvent');
        clickEvent.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null); // dispatch click event to simulate download

        a.dispatchEvent(clickEvent);
      } else {
        // fallover, open resource in new tab.
        window.open(url, '_blank', '');
      }
    };
  }();

  function _save(text, fileName) {
    var blob = new Blob([text], {
      type: 'text/plain'
    });
    saveAs(blob, fileName || 'subtitle.srt');
  }

  return _save;
}();

exports["default"] = save;
},{}],"../node_modules/moment/moment.js":[function(require,module,exports) {
var define;
var global = arguments[3];
//! moment.js
//! version : 2.20.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}

function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
        return (Object.getOwnPropertyNames(obj).length === 0);
    } else {
        var k;
        for (k in obj) {
            if (obj.hasOwnProperty(k)) {
                return false;
            }
        }
        return true;
    }
}

function isUndefined(input) {
    return input === void 0;
}

function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}

function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}

function extend(a, b) {
    for (var i in b) {
        if (hasOwnProp(b, i)) {
            a[i] = b[i];
        }
    }

    if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}

function createUTC (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
}

function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty           : false,
        unusedTokens    : [],
        unusedInput     : [],
        overflow        : -2,
        charsLeftOver   : 0,
        nullInput       : false,
        invalidMonth    : null,
        invalidFormat   : false,
        userInvalidated : false,
        iso             : false,
        parsedDateParts : [],
        meridiem        : null,
        rfc2822         : false,
        weekdayMismatch : false
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}

var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}

function isValid(m) {
    if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.weekdayMismatch &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid (flags) {
    var m = createUTC(NaN);
    if (flags != null) {
        extend(getParsingFlags(m), flags);
    }
    else {
        getParsingFlags(m).userInvalidated = true;
    }

    return m;
}

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = hooks.momentProperties = [];

function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
        to._i = from._i;
    }
    if (!isUndefined(from._f)) {
        to._f = from._f;
    }
    if (!isUndefined(from._l)) {
        to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
        to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
        to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

var updateInProgress = false;

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment (obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
}

function absFloor (number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}

function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }

    return value;
}

// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false &&
            (typeof console !==  'undefined') && console.warn) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return extend(function () {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [];
            var arg;
            for (var i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (var key in arguments[0]) {
                        arg += key + ': ' + arguments[0][key] + ', ';
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments[i];
                }
                args.push(arg);
            }
            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

function set (config) {
    var prop, i;
    for (i in config) {
        prop = config[i];
        if (isFunction(prop)) {
            this[i] = prop;
        } else {
            this['_' + i] = prop;
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            '|' + (/\d{1,2}/).source);
}

function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
        }
    }
    return res;
}

function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}

var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i, res = [];
        for (i in obj) {
            if (hasOwnProp(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

var defaultCalendar = {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
};

function calendar (key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
}

var defaultLongDateFormat = {
    LTS  : 'h:mm:ss A',
    LT   : 'h:mm A',
    L    : 'MM/DD/YYYY',
    LL   : 'MMMM D, YYYY',
    LLL  : 'MMMM D, YYYY h:mm A',
    LLLL : 'dddd, MMMM D, YYYY h:mm A'
};

function longDateFormat (key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
        return val.slice(1);
    });

    return this._longDateFormat[key];
}

var defaultInvalidDate = 'Invalid date';

function invalidDate () {
    return this._invalidDate;
}

var defaultOrdinal = '%d';
var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

function ordinal (number) {
    return this._ordinal.replace('%d', number);
}

var defaultRelativeTime = {
    future : 'in %s',
    past   : '%s ago',
    s  : 'a few seconds',
    ss : '%d seconds',
    m  : 'a minute',
    mm : '%d minutes',
    h  : 'an hour',
    hh : '%d hours',
    d  : 'a day',
    dd : '%d days',
    M  : 'a month',
    MM : '%d months',
    y  : 'a year',
    yy : '%d years'
};

function relativeTime (number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ?
        output(number, withoutSuffix, string, isFuture) :
        output.replace(/%d/i, number);
}

function pastFuture (diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
}

var aliases = {};

function addUnitAlias (unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}

var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [];
    for (var u in unitsObj) {
        units.push({unit: u, priority: priorities[u]});
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}

function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

var formatFunctions = {};

var formatTokenFunctions = {};

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken (token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens), i, length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '', i;
        for (i = 0; i < length; i++) {
            output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}

var match1         = /\d/;            //       0 - 9
var match2         = /\d\d/;          //      00 - 99
var match3         = /\d{3}/;         //     000 - 999
var match4         = /\d{4}/;         //    0000 - 9999
var match6         = /[+-]?\d{6}/;    // -999999 - 999999
var match1to2      = /\d\d?/;         //       0 - 99
var match3to4      = /\d\d\d\d?/;     //     999 - 9999
var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3      = /\d{1,3}/;       //       0 - 999
var match1to4      = /\d{1,4}/;       //       0 - 9999
var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

var matchUnsigned  = /\d+/;           //       0 - inf
var matchSigned    = /[+-]?\d+/;      //    -inf - inf

var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;


var regexes = {};

function addRegexToken (token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}

function getParseRegexForToken (token, config) {
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
    }));
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var tokens = {};

function addParseToken (token, callback) {
    var i, func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if (isNumber(callback)) {
        func = function (input, array) {
            array[callback] = toInt(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken (token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}

var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;

// FORMATTING

addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
});

addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

addFormatToken(0, ['YYYY',   4],       0, 'year');
addFormatToken(0, ['YYYYY',  5],       0, 'year');
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

addUnitAlias('year', 'y');

// PRIORITIES

addUnitPriority('year', 1);

// PARSING

addRegexToken('Y',      matchSigned);
addRegexToken('YY',     match1to2, match2);
addRegexToken('YYYY',   match1to4, match4);
addRegexToken('YYYYY',  match1to6, match6);
addRegexToken('YYYYYY', match1to6, match6);

addParseToken(['YYYYY', 'YYYYYY'], YEAR);
addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// HOOKS

hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = makeGetSet('FullYear', true);

function getIsLeapYear () {
    return isLeapYear(this.year());
}

function makeGetSet (unit, keepTime) {
    return function (value) {
        if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

function get (mom, unit) {
    return mom.isValid() ?
        mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}

function set$1 (mom, unit, value) {
    if (mom.isValid() && !isNaN(value)) {
        if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
        }
        else {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }
}

// MOMENTS

function stringGet (units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
        return this[units]();
    }
    return this;
}


function stringSet (units, value) {
    if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);
        for (var i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units](value);
        }
    }
    return this;
}

function mod(n, x) {
    return ((n % x) + x) % x;
}

var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}

function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
        return NaN;
    }
    var modMonth = mod(month, 12);
    year += (month - modMonth) / 12;
    return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
}

// FORMATTING

addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

addUnitAlias('month', 'M');

// PRIORITY

addUnitPriority('month', 8);

// PARSING

addRegexToken('M',    match1to2);
addRegexToken('MM',   match1to2, match2);
addRegexToken('MMM',  function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
});

addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[MONTH] = month;
    } else {
        getParsingFlags(config).invalidMonth = input;
    }
});

// LOCALES

var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths (m, format) {
    if (!m) {
        return isArray(this._months) ? this._months :
            this._months['standalone'];
    }
    return isArray(this._months) ? this._months[m.month()] :
        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}

var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
function localeMonthsShort (m, format) {
    if (!m) {
        return isArray(this._monthsShort) ? this._monthsShort :
            this._monthsShort['standalone'];
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
        this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse (monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }
        if (!strict && !this._monthsParse[i]) {
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
            return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
            return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth (mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = toInt(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!isNumber(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth (value) {
    if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
    } else {
        return get(this, 'Month');
    }
}

function getDaysInMonth () {
    return daysInMonth(this.year(), this.month());
}

var defaultMonthsShortRegex = matchWord;
function monthsShortRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    }
}

var defaultMonthsRegex = matchWord;
function monthsRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    }
}

function computeMonthsParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
}

function createDate (y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date = new Date(y, m, d, h, M, s, ms);

    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}

function createUTCDate (y) {
    var date = new Date(Date.UTC.apply(null, arguments));

    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}

// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear, resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek, resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

// FORMATTING

addFormatToken('w', ['ww', 2], 'wo', 'week');
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

addUnitAlias('week', 'w');
addUnitAlias('isoWeek', 'W');

// PRIORITIES

addUnitPriority('week', 5);
addUnitPriority('isoWeek', 5);

// PARSING

addRegexToken('w',  match1to2);
addRegexToken('ww', match1to2, match2);
addRegexToken('W',  match1to2);
addRegexToken('WW', match1to2, match2);

addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
});

// HELPERS

// LOCALES

function localeWeek (mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow : 0, // Sunday is the first day of the week.
    doy : 6  // The week that contains Jan 1st is the first week of the year.
};

function localeFirstDayOfWeek () {
    return this._week.dow;
}

function localeFirstDayOfYear () {
    return this._week.doy;
}

// MOMENTS

function getSetWeek (input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek (input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}

// FORMATTING

addFormatToken('d', 0, 'do', 'day');

addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

addFormatToken('e', 0, 0, 'weekday');
addFormatToken('E', 0, 0, 'isoWeekday');

// ALIASES

addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E');

// PRIORITY
addUnitPriority('day', 11);
addUnitPriority('weekday', 11);
addUnitPriority('isoWeekday', 11);

// PARSING

addRegexToken('d',    match1to2);
addRegexToken('e',    match1to2);
addRegexToken('E',    match1to2);
addRegexToken('dd',   function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
addRegexToken('ddd',   function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
addRegexToken('dddd',   function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        getParsingFlags(config).invalidWeekday = input;
    }
});

addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
function localeWeekdays (m, format) {
    if (!m) {
        return isArray(this._weekdays) ? this._weekdays :
            this._weekdays['standalone'];
    }
    return isArray(this._weekdays) ? this._weekdays[m.day()] :
        this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
}

var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
function localeWeekdaysShort (m) {
    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}

var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
function localeWeekdaysMin (m) {
    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse$1(weekdayName, format, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse (weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = createUTC([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
        }
        if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

var defaultWeekdaysRegex = matchWord;
function weekdaysRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ?
            this._weekdaysStrictRegex : this._weekdaysRegex;
    }
}

var defaultWeekdaysShortRegex = matchWord;
function weekdaysShortRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ?
            this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
}

var defaultWeekdaysMinRegex = matchWord;
function weekdaysMinRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ?
            this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
}


function computeWeekdaysParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this.weekdaysMin(mom, '');
        shortp = this.weekdaysShort(mom, '');
        longp = this.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}

// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

addFormatToken('H', ['HH', 2], 0, 'hour');
addFormatToken('h', ['hh', 2], 0, hFormat);
addFormatToken('k', ['kk', 2], 0, kFormat);

addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});

addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
});

addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

function meridiem (token, lowercase) {
    addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

addUnitAlias('hour', 'h');

// PRIORITY
addUnitPriority('hour', 13);

// PARSING

function matchMeridiem (isStrict, locale) {
    return locale._meridiemParse;
}

addRegexToken('a',  matchMeridiem);
addRegexToken('A',  matchMeridiem);
addRegexToken('H',  match1to2);
addRegexToken('h',  match1to2);
addRegexToken('k',  match1to2);
addRegexToken('HH', match1to2, match2);
addRegexToken('hh', match1to2, match2);
addRegexToken('kk', match1to2, match2);

addRegexToken('hmm', match3to4);
addRegexToken('hmmss', match5to6);
addRegexToken('Hmm', match3to4);
addRegexToken('Hmmss', match5to6);

addParseToken(['H', 'HH'], HOUR);
addParseToken(['k', 'kk'], function (input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
});
addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
});
addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
});
addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
});

// LOCALES

function localeIsPM (input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return ((input + '').toLowerCase().charAt(0) === 'p');
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem (hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
var getSetHour = makeGetSet('Hours', true);

// months
// week
// weekdays
// meridiem
var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse
};

// internal storage for locale config files
var locales = {};
var localeFamilies = {};
var globalLocale;

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0, j, next, locale, split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}

function loadLocale(name) {
    var oldLocale = null;
    // TODO: Find a better way to register and load all the locales in Node
    if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
        try {
            oldLocale = globalLocale._abbr;
            var aliasedRequire = require;
            aliasedRequire('./locale/' + name);
            getSetGlobalLocale(oldLocale);
        } catch (e) {}
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale (key, values) {
    var data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        }
    }

    return globalLocale._abbr;
}

function defineLocale (name, config) {
    if (config !== null) {
        var parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                    name: name,
                    config: config
                });
                return null;
            }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);


        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale, tmpLocale, parentConfig = baseConfig;
        // MERGE
        tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
        }
        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale (key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return keys(locales);
}

function checkOverflow (m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
        overflow =
            a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
            a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
            a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
            a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
            -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
        }
        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
        }
        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
    }

    return m;
}

// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray (config) {
    var i, date, input = [], currentDate, expectedWeekday, yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[HOUR] = 24;
    }

    // check for mismatching day of week
    if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
        getParsingFlags(config).weekdayMismatch = true;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        var curWeek = weekOfYear(createLocal(), dow, doy);

        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

        // Default to current week.
        week = defaults(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
    } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/],
    ['YYYYMMDD', /\d{8}/],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/]
];

// iso time formats and regexes
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];

var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
function configFromISO(config) {
    var i, l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime, dateFormat, timeFormat, tzFormat;

    if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
    } else {
        config._isValid = false;
    }
}

// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = [
        untruncateYear(yearStr),
        defaultLocaleMonthsShort.indexOf(monthStr),
        parseInt(dayStr, 10),
        parseInt(hourStr, 10),
        parseInt(minuteStr, 10)
    ];

    if (secondStr) {
        result.push(parseInt(secondStr, 10));
    }

    return result;
}

function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);
    if (year <= 49) {
        return 2000 + year;
    } else if (year <= 999) {
        return 1900 + year;
    }
    return year;
}

function preprocessRFC2822(s) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').trim();
}

function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
        var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
            weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
        if (weekdayProvided !== weekdayActual) {
            getParsingFlags(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
        }
    }
    return true;
}

var obsOffsets = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
};

function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
        return obsOffsets[obsOffset];
    } else if (militaryOffset) {
        // the only allowed military tz is Z
        return 0;
    } else {
        var hm = parseInt(numOffset, 10);
        var m = hm % 100, h = (hm - m) / 100;
        return h * 60 + m;
    }
}

// date and time from ref 2822 format
function configFromRFC2822(config) {
    var match = rfc2822.exec(preprocessRFC2822(config._i));
    if (match) {
        var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
        if (!checkWeekday(match[1], parsedArray, config)) {
            return;
        }

        config._a = parsedArray;
        config._tzm = calculateOffset(match[8], match[9], match[10]);

        config._d = createUTCDate.apply(null, config._a);
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

        getParsingFlags(config).rfc2822 = true;
    } else {
        config._isValid = false;
    }
}

// date from iso format or fallback
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    configFromRFC2822(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    // Final attempt, use Input Fallback
    hooks.createFromInputFallback(config);
}

hooks.createFromInputFallback = deprecate(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
    'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
    'discouraged and will be removed in an upcoming major release. Please refer to ' +
    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);

// constant that refers to the ISO standard
hooks.ISO_8601 = function () {};

// constant that refers to the RFC 2822 form
hooks.RFC_2822 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
    }
    if (config._f === hooks.RFC_2822) {
        configFromRFC2822(config);
        return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i, parsedInput, tokens, token, skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;

    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    configFromArray(config);
    checkOverflow(config);
}


function meridiemFixWrap (locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}

// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,

        scoreToBeat,
        i,
        currentScore;

    if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
            continue;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;

        //or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }

    extend(config, bestMoment || tempConfig);
}

function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
    });

    configFromArray(config);
}

function createFromConfig (config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig (config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || (format === undefined && input === '')) {
        return createInvalid({nullInput: true});
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
        return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
        config._d = input;
    } else if (isArray(format)) {
        configFromStringAndArray(config);
    } else if (format) {
        configFromStringAndFormat(config);
    }  else {
        configFromInput(config);
    }

    if (!isValid(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if (isUndefined(input)) {
        config._d = new Date(hooks.now());
    } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        configFromString(config);
    } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        configFromArray(config);
    } else if (isObject(input)) {
        configFromObject(config);
    } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        hooks.createFromInputFallback(config);
    }
}

function createLocalOrUTC (input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if ((isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}

function createLocal (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
}

var prototypeMin = deprecate(
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

var prototypeMax = deprecate(
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}

var now = function () {
    return Date.now ? Date.now() : +(new Date());
};

var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

function isDurationValid(m) {
    for (var key in m) {
        if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
        }
    }

    var unitHasDecimal = false;
    for (var i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
            if (unitHasDecimal) {
                return false; // only allow non-integers for smallest unit
            }
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }

    return true;
}

function isValid$1() {
    return this._isValid;
}

function createInvalid$1() {
    return createDuration(NaN);
}

function Duration (duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    this._isValid = isDurationValid(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds = +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days +
        weeks * 7;
    // It is impossible to translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months +
        quarters * 3 +
        years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
}

function isDuration (obj) {
    return obj instanceof Duration;
}

function absRound (number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}

// FORMATTING

function offset (token, separator) {
    addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset();
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

addRegexToken('Z',  matchShortOffset);
addRegexToken('ZZ', matchShortOffset);
addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
        return null;
    }

    var chunk   = matches[matches.length - 1] || [];
    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ?
      0 :
      parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        hooks.updateOffset(res, false);
        return res;
    } else {
        return createLocal(input).local();
    }
}

function getDateOffset (m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset (input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone (input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC (keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal (keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset () {
    if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        }
        else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset (input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime () {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted () {
    if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {};

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() &&
            compareArrays(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal () {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset () {
    return this.isValid() ? this._isUTC : false;
}

function isUtc () {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}

// ASP.NET json date format regex
var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

function createDuration (input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if (isDuration(input)) {
        duration = {
            ms : input._milliseconds,
            d  : input._days,
            M  : input._months
        };
    } else if (isNumber(input)) {
        duration = {};
        if (key) {
            duration[key] = input;
        } else {
            duration.milliseconds = input;
        }
    } else if (!!(match = aspNetRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y  : 0,
            d  : toInt(match[DATE])                         * sign,
            h  : toInt(match[HOUR])                         * sign,
            m  : toInt(match[MINUTE])                       * sign,
            s  : toInt(match[SECOND])                       * sign,
            ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
        };
    } else if (!!(match = isoRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : (match[1] === '+') ? 1 : 1;
        duration = {
            y : parseIso(match[2], sign),
            M : parseIso(match[3], sign),
            w : parseIso(match[4], sign),
            d : parseIso(match[5], sign),
            h : parseIso(match[6], sign),
            m : parseIso(match[7], sign),
            s : parseIso(match[8], sign)
        };
    } else if (duration == null) {// checks for null or undefined
        duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
    }

    return ret;
}

createDuration.fn = Duration.prototype;
createDuration.invalid = createInvalid$1;

function parseIso (inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {milliseconds: 0, months: 0};

    res.months = other.month() - base.month() +
        (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return {milliseconds: 0, months: 0};
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}

// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
            'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val; val = period; period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract (mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (months) {
        setMonth(mom, get(mom, 'Month') + months * isAdding);
    }
    if (days) {
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }
    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (updateOffset) {
        hooks.updateOffset(mom, days || months);
    }
}

var add      = createAdder(1, 'add');
var subtract = createAdder(-1, 'subtract');

function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
            diff < 0 ? 'lastDay' :
            diff < 1 ? 'sameDay' :
            diff < 2 ? 'nextDay' :
            diff < 7 ? 'nextWeek' : 'sameElse';
}

function calendar$1 (time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';

    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
}

function clone () {
    return new Moment(this);
}

function isAfter (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween (from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
        (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
}

function isSame (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
}

function isSameOrAfter (input, units) {
    return this.isSame(input, units) || this.isAfter(input,units);
}

function isSameOrBefore (input, units) {
    return this.isSame(input, units) || this.isBefore(input,units);
}

function diff (input, units, asFloat) {
    var that,
        zoneDelta,
        delta, output;

    if (!this.isValid()) {
        return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    switch (units) {
        case 'year': output = monthDiff(this, that) / 12; break;
        case 'month': output = monthDiff(this, that); break;
        case 'quarter': output = monthDiff(this, that) / 3; break;
        case 'second': output = (this - that) / 1e3; break; // 1000
        case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
        case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
        case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
        case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
        default: output = this - that;
    }

    return asFloat ? output : absFloor(output);
}

function monthDiff (a, b) {
    // difference in months
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2, adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}

hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString () {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString(keepOffset) {
    if (!this.isValid()) {
        return null;
    }
    var utc = keepOffset !== true;
    var m = utc ? this.clone().utc() : this;
    if (m.year() < 0 || m.year() > 9999) {
        return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }
    if (isFunction(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        if (utc) {
            return this.toDate().toISOString();
        } else {
            return new Date(this._d.valueOf()).toISOString().replace('Z', formatMoment(m, 'Z'));
        }
    }
    return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect () {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment';
    var zone = '';
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    var prefix = '[' + func + '("]';
    var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format (inputString) {
    if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
}

function from (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
}

function to (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow (withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
}

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale (key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = deprecate(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData () {
    return this._locale;
}

function startOf (units) {
    units = normalizeUnits(units);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
    }

    // weeks are a special case
    if (units === 'week') {
        this.weekday(0);
    }
    if (units === 'isoWeek') {
        this.isoWeekday(1);
    }

    // quarters are also special
    if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
}

function endOf (units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
        return this;
    }

    // 'date' is an alias for 'day', so it should be considered as such.
    if (units === 'date') {
        units = 'day';
    }

    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
}

function valueOf () {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
}

function unix () {
    return Math.floor(this.valueOf() / 1000);
}

function toDate () {
    return new Date(this.valueOf());
}

function toArray () {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}

function toObject () {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
    };
}

function toJSON () {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}

function isValid$2 () {
    return isValid(this);
}

function parsingFlags () {
    return extend({}, getParsingFlags(this));
}

function invalidAt () {
    return getParsingFlags(this).overflow;
}

function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    };
}

// FORMATTING

addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken (token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg',     'weekYear');
addWeekYearFormatToken('ggggg',    'weekYear');
addWeekYearFormatToken('GGGG',  'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

addUnitAlias('weekYear', 'gg');
addUnitAlias('isoWeekYear', 'GG');

// PRIORITY

addUnitPriority('weekYear', 1);
addUnitPriority('isoWeekYear', 1);


// PARSING

addRegexToken('G',      matchSigned);
addRegexToken('g',      matchSigned);
addRegexToken('GG',     match1to2, match2);
addRegexToken('gg',     match1to2, match2);
addRegexToken('GGGG',   match1to4, match4);
addRegexToken('gggg',   match1to4, match4);
addRegexToken('GGGGG',  match1to6, match6);
addRegexToken('ggggg',  match1to6, match6);

addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
});

addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy);
}

function getSetISOWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input, this.isoWeek(), this.isoWeekday(), 1, 4);
}

function getISOWeeksInYear () {
    return weeksInYear(this.year(), 1, 4);
}

function getWeeksInYear () {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return weekOfYear(this, dow, doy).year;
    } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PRIORITY

addUnitPriority('quarter', 7);

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}

// FORMATTING

addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

addUnitAlias('date', 'D');

// PRIOROITY
addUnitPriority('date', 9);

// PARSING

addRegexToken('D',  match1to2);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict ?
      (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
      locale._dayOfMonthOrdinalParseLenient;
});

addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0]);
});

// MOMENTS

var getSetDayOfMonth = makeGetSet('Date', true);

// FORMATTING

addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

addUnitAlias('dayOfYear', 'DDD');

// PRIORITY
addUnitPriority('dayOfYear', 4);

// PARSING

addRegexToken('DDD',  match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear (input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
}

// FORMATTING

addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

addUnitAlias('minute', 'm');

// PRIORITY

addUnitPriority('minute', 14);

// PARSING

addRegexToken('m',  match1to2);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

var getSetMinute = makeGetSet('Minutes', false);

// FORMATTING

addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

addUnitAlias('second', 's');

// PRIORITY

addUnitPriority('second', 15);

// PARSING

addRegexToken('s',  match1to2);
addRegexToken('ss', match1to2, match2);
addParseToken(['s', 'ss'], SECOND);

// MOMENTS

var getSetSecond = makeGetSet('Seconds', false);

// FORMATTING

addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

addFormatToken(0, ['SSS', 3], 0, 'millisecond');
addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});


// ALIASES

addUnitAlias('millisecond', 'ms');

// PRIORITY

addUnitPriority('millisecond', 16);

// PARSING

addRegexToken('S',    match1to3, match1);
addRegexToken('SS',   match1to3, match2);
addRegexToken('SSS',  match1to3, match3);

var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
}

function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
}
// MOMENTS

var getSetMillisecond = makeGetSet('Milliseconds', false);

// FORMATTING

addFormatToken('z',  0, 0, 'zoneAbbr');
addFormatToken('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr () {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName () {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}

var proto = Moment.prototype;

proto.add               = add;
proto.calendar          = calendar$1;
proto.clone             = clone;
proto.diff              = diff;
proto.endOf             = endOf;
proto.format            = format;
proto.from              = from;
proto.fromNow           = fromNow;
proto.to                = to;
proto.toNow             = toNow;
proto.get               = stringGet;
proto.invalidAt         = invalidAt;
proto.isAfter           = isAfter;
proto.isBefore          = isBefore;
proto.isBetween         = isBetween;
proto.isSame            = isSame;
proto.isSameOrAfter     = isSameOrAfter;
proto.isSameOrBefore    = isSameOrBefore;
proto.isValid           = isValid$2;
proto.lang              = lang;
proto.locale            = locale;
proto.localeData        = localeData;
proto.max               = prototypeMax;
proto.min               = prototypeMin;
proto.parsingFlags      = parsingFlags;
proto.set               = stringSet;
proto.startOf           = startOf;
proto.subtract          = subtract;
proto.toArray           = toArray;
proto.toObject          = toObject;
proto.toDate            = toDate;
proto.toISOString       = toISOString;
proto.inspect           = inspect;
proto.toJSON            = toJSON;
proto.toString          = toString;
proto.unix              = unix;
proto.valueOf           = valueOf;
proto.creationData      = creationData;

// Year
proto.year       = getSetYear;
proto.isLeapYear = getIsLeapYear;

// Week Year
proto.weekYear    = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;

// Quarter
proto.quarter = proto.quarters = getSetQuarter;

// Month
proto.month       = getSetMonth;
proto.daysInMonth = getDaysInMonth;

// Week
proto.week           = proto.weeks        = getSetWeek;
proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
proto.weeksInYear    = getWeeksInYear;
proto.isoWeeksInYear = getISOWeeksInYear;

// Day
proto.date       = getSetDayOfMonth;
proto.day        = proto.days             = getSetDayOfWeek;
proto.weekday    = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear  = getSetDayOfYear;

// Hour
proto.hour = proto.hours = getSetHour;

// Minute
proto.minute = proto.minutes = getSetMinute;

// Second
proto.second = proto.seconds = getSetSecond;

// Millisecond
proto.millisecond = proto.milliseconds = getSetMillisecond;

// Offset
proto.utcOffset            = getSetOffset;
proto.utc                  = setOffsetToUTC;
proto.local                = setOffsetToLocal;
proto.parseZone            = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST                = isDaylightSavingTime;
proto.isLocal              = isLocal;
proto.isUtcOffset          = isUtcOffset;
proto.isUtc                = isUtc;
proto.isUTC                = isUtc;

// Timezone
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;

// Deprecations
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

function createUnix (input) {
    return createLocal(input * 1000);
}

function createInZone () {
    return createLocal.apply(null, arguments).parseZone();
}

function preParsePostFormat (string) {
    return string;
}

var proto$1 = Locale.prototype;

proto$1.calendar        = calendar;
proto$1.longDateFormat  = longDateFormat;
proto$1.invalidDate     = invalidDate;
proto$1.ordinal         = ordinal;
proto$1.preparse        = preParsePostFormat;
proto$1.postformat      = preParsePostFormat;
proto$1.relativeTime    = relativeTime;
proto$1.pastFuture      = pastFuture;
proto$1.set             = set;

// Month
proto$1.months            =        localeMonths;
proto$1.monthsShort       =        localeMonthsShort;
proto$1.monthsParse       =        localeMonthsParse;
proto$1.monthsRegex       = monthsRegex;
proto$1.monthsShortRegex  = monthsShortRegex;

// Week
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;

// Day of Week
proto$1.weekdays       =        localeWeekdays;
proto$1.weekdaysMin    =        localeWeekdaysMin;
proto$1.weekdaysShort  =        localeWeekdaysShort;
proto$1.weekdaysParse  =        localeWeekdaysParse;

proto$1.weekdaysRegex       =        weekdaysRegex;
proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

// Hours
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;

function get$1 (format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl (format, index, field) {
    if (isNumber(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get$1(format, index, field, 'month');
    }

    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get$1(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl (localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
        return get$1(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
        out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths (format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort (format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}

getSetGlobalLocale('en', {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (toInt(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

// Side effect imports
hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

var mathAbs = Math.abs;

function abs () {
    var data           = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days         = mathAbs(this._days);
    this._months       = mathAbs(this._months);

    data.milliseconds  = mathAbs(data.milliseconds);
    data.seconds       = mathAbs(data.seconds);
    data.minutes       = mathAbs(data.minutes);
    data.hours         = mathAbs(data.hours);
    data.months        = mathAbs(data.months);
    data.years         = mathAbs(data.years);

    return this;
}

function addSubtract$1 (duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days         += direction * other._days;
    duration._months       += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add$1 (input, value) {
    return addSubtract$1(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract$1 (input, value) {
    return addSubtract$1(this, input, value, -1);
}

function absCeil (number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}

function bubble () {
    var milliseconds = this._milliseconds;
    var days         = this._days;
    var months       = this._months;
    var data         = this._data;
    var seconds, minutes, hours, years, monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds           = absFloor(milliseconds / 1000);
    data.seconds      = seconds % 60;

    minutes           = absFloor(seconds / 60);
    data.minutes      = minutes % 60;

    hours             = absFloor(minutes / 60);
    data.hours        = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days   = days;
    data.months = months;
    data.years  = years;

    return this;
}

function daysToMonths (days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
}

function monthsToDays (months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
}

function as (units) {
    if (!this.isValid()) {
        return NaN;
    }
    var days;
    var months;
    var milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
        days   = this._days   + milliseconds / 864e5;
        months = this._months + daysToMonths(days);
        return units === 'month' ? months : months / 12;
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week'   : return days / 7     + milliseconds / 6048e5;
            case 'day'    : return days         + milliseconds / 864e5;
            case 'hour'   : return days * 24    + milliseconds / 36e5;
            case 'minute' : return days * 1440  + milliseconds / 6e4;
            case 'second' : return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
            default: throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf$1 () {
    if (!this.isValid()) {
        return NaN;
    }
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        toInt(this._months / 12) * 31536e6
    );
}

function makeAs (alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms');
var asSeconds      = makeAs('s');
var asMinutes      = makeAs('m');
var asHours        = makeAs('h');
var asDays         = makeAs('d');
var asWeeks        = makeAs('w');
var asMonths       = makeAs('M');
var asYears        = makeAs('y');

function clone$1 () {
    return createDuration(this);
}

function get$2 (units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + 's']() : NaN;
}

function makeGetter(name) {
    return function () {
        return this.isValid() ? this._data[name] : NaN;
    };
}

var milliseconds = makeGetter('milliseconds');
var seconds      = makeGetter('seconds');
var minutes      = makeGetter('minutes');
var hours        = makeGetter('hours');
var days         = makeGetter('days');
var months       = makeGetter('months');
var years        = makeGetter('years');

function weeks () {
    return absFloor(this.days() / 7);
}

var round = Math.round;
var thresholds = {
    ss: 44,         // a few seconds to seconds
    s : 45,         // seconds to minute
    m : 45,         // minutes to hour
    h : 22,         // hours to day
    d : 26,         // days to month
    M : 11          // months to year
};

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds  = round(duration.as('s'));
    var minutes  = round(duration.as('m'));
    var hours    = round(duration.as('h'));
    var days     = round(duration.as('d'));
    var months   = round(duration.as('M'));
    var years    = round(duration.as('y'));

    var a = seconds <= thresholds.ss && ['s', seconds]  ||
            seconds < thresholds.s   && ['ss', seconds] ||
            minutes <= 1             && ['m']           ||
            minutes < thresholds.m   && ['mm', minutes] ||
            hours   <= 1             && ['h']           ||
            hours   < thresholds.h   && ['hh', hours]   ||
            days    <= 1             && ['d']           ||
            days    < thresholds.d   && ['dd', days]    ||
            months  <= 1             && ['M']           ||
            months  < thresholds.M   && ['MM', months]  ||
            years   <= 1             && ['y']           || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding (roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof(roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold (threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
        thresholds.ss = limit - 1;
    }
    return true;
}

function humanize (withSuffix) {
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}

var abs$1 = Math.abs;

function sign(x) {
    return ((x > 0) - (x < 0)) || +x;
}

function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var seconds = abs$1(this._milliseconds) / 1000;
    var days         = abs$1(this._days);
    var months       = abs$1(this._months);
    var minutes, hours, years;

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes           = absFloor(seconds / 60);
    hours             = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years  = absFloor(months / 12);
    months %= 12;


    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
    var total = this.asSeconds();

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    var totalSign = total < 0 ? '-' : '';
    var ymSign = sign(this._months) !== sign(total) ? '-' : '';
    var daysSign = sign(this._days) !== sign(total) ? '-' : '';
    var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

    return totalSign + 'P' +
        (Y ? ymSign + Y + 'Y' : '') +
        (M ? ymSign + M + 'M' : '') +
        (D ? daysSign + D + 'D' : '') +
        ((h || m || s) ? 'T' : '') +
        (h ? hmsSign + h + 'H' : '') +
        (m ? hmsSign + m + 'M' : '') +
        (s ? hmsSign + s + 'S' : '');
}

var proto$2 = Duration.prototype;

proto$2.isValid        = isValid$1;
proto$2.abs            = abs;
proto$2.add            = add$1;
proto$2.subtract       = subtract$1;
proto$2.as             = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds      = asSeconds;
proto$2.asMinutes      = asMinutes;
proto$2.asHours        = asHours;
proto$2.asDays         = asDays;
proto$2.asWeeks        = asWeeks;
proto$2.asMonths       = asMonths;
proto$2.asYears        = asYears;
proto$2.valueOf        = valueOf$1;
proto$2._bubble        = bubble;
proto$2.clone          = clone$1;
proto$2.get            = get$2;
proto$2.milliseconds   = milliseconds;
proto$2.seconds        = seconds;
proto$2.minutes        = minutes;
proto$2.hours          = hours;
proto$2.days           = days;
proto$2.weeks          = weeks;
proto$2.months         = months;
proto$2.years          = years;
proto$2.humanize       = humanize;
proto$2.toISOString    = toISOString$1;
proto$2.toString       = toISOString$1;
proto$2.toJSON         = toISOString$1;
proto$2.locale         = locale;
proto$2.localeData     = localeData;

// Deprecations
proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$2.lang = lang;

// Side effect imports

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
});

// Side effect imports


hooks.version = '2.20.1';

setHookCallback(createLocal);

hooks.fn                    = proto;
hooks.min                   = min;
hooks.max                   = max;
hooks.now                   = now;
hooks.utc                   = createUTC;
hooks.unix                  = createUnix;
hooks.months                = listMonths;
hooks.isDate                = isDate;
hooks.locale                = getSetGlobalLocale;
hooks.invalid               = createInvalid;
hooks.duration              = createDuration;
hooks.isMoment              = isMoment;
hooks.weekdays              = listWeekdays;
hooks.parseZone             = createInZone;
hooks.localeData            = getLocale;
hooks.isDuration            = isDuration;
hooks.monthsShort           = listMonthsShort;
hooks.weekdaysMin           = listWeekdaysMin;
hooks.defineLocale          = defineLocale;
hooks.updateLocale          = updateLocale;
hooks.locales               = listLocales;
hooks.weekdaysShort         = listWeekdaysShort;
hooks.normalizeUnits        = normalizeUnits;
hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat        = getCalendarFormat;
hooks.prototype             = proto;

// currently HTML5 input type only supports 24-hour formats
hooks.HTML5_FMT = {
    DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
    DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
    DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
    DATE: 'YYYY-MM-DD',                             // <input type="date" />
    TIME: 'HH:mm',                                  // <input type="time" />
    TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
    TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
    WEEK: 'YYYY-[W]WW',                             // <input type="week" />
    MONTH: 'YYYY-MM'                                // <input type="month" />
};

return hooks;

})));

},{}],"../node_modules/isomorphic-unzip/lib/browser/z-worker.js":[function(require,module,exports) {
/**
 *  From zip.js/z-worker.js, combined with inflate.js, exports as raw string so it can be requied and to use as a blob.
 */
module.exports = 'function inflate(a){"use strict";function w(){function m(a,b,d,h,m,n,o,p,q,r,s){var t,u,w,x,z,A,B,C,E,F,G,H,I,D=0,y=d;do e[a[b+D]]++,D++,y--;while(0!==y);if(e[0]==d)return o[0]=-1,p[0]=0,c;for(B=p[0],z=1;v>=z&&0===e[z];z++);for(A=z,z>B&&(B=z),y=v;0!==y&&0===e[y];y--);for(w=y,B>y&&(B=y),p[0]=B,H=1<<z;y>z;z++,H<<=1)if((H-=e[z])<0)return g;if((H-=e[y])<0)return g;for(e[y]+=H,l[1]=z=0,D=1,G=2;0!==--y;)l[G]=z+=e[D],G++,D++;y=0,D=0;do 0!==(z=a[b+D])&&(s[l[z]++]=y),D++;while(++y<d);for(d=l[w],l[0]=y=0,D=0,x=-1,F=-B,j[0]=0,E=0,I=0;w>=A;A++)for(t=e[A];0!==t--;){for(;A>F+B;){if(x++,F+=B,I=w-F,I=I>B?B:I,(u=1<<(z=A-F))>t+1&&(u-=t+1,G=A,I>z))for(;++z<I&&!((u<<=1)<=e[++G]);)u-=e[G];if(I=1<<z,r[0]+I>k)return g;j[x]=E=r[0],r[0]+=I,0!==x?(l[x]=y,f[0]=z,f[1]=B,z=y>>>F-B,f[2]=E-j[x-1]-z,q.set(f,3*(j[x-1]+z))):o[0]=E}for(f[1]=A-F,D>=d?f[0]=192:s[D]<h?(f[0]=s[D]<256?0:96,f[2]=s[D++]):(f[0]=n[s[D]-h]+16+64,f[2]=m[s[D++]-h]),u=1<<A-F,z=y>>>F;I>z;z+=u)q.set(f,3*(E+z));for(z=1<<A-1;0!==(y&z);z>>>=1)y^=z;for(y^=z,C=(1<<F)-1;(y&C)!=l[x];)x--,F-=B,C=(1<<F)-1}return 0!==H&&1!=w?i:c}function n(a){var c;for(b||(b=[],d=[],e=new Int32Array(v+1),f=[],j=new Int32Array(v),l=new Int32Array(v+1)),d.length<a&&(d=[]),c=0;a>c;c++)d[c]=0;for(c=0;v+1>c;c++)e[c]=0;for(c=0;3>c;c++)f[c]=0;j.set(e.subarray(0,v),0),l.set(e.subarray(0,v+1),0)}var b,d,e,f,j,l,a=this;a.inflate_trees_bits=function(a,c,e,f,h){var j;return n(19),b[0]=0,j=m(a,0,19,19,null,null,e,c,f,b,d),j==g?h.msg="oversubscribed dynamic bit lengths tree":(j==i||0===c[0])&&(h.msg="incomplete dynamic bit lengths tree",j=g),j},a.inflate_trees_dynamic=function(a,e,f,j,k,l,o,p,q){var v;return n(288),b[0]=0,v=m(f,0,a,257,r,s,l,j,p,b,d),v!=c||0===j[0]?(v==g?q.msg="oversubscribed literal/length tree":v!=h&&(q.msg="incomplete literal/length tree",v=g),v):(n(288),v=m(f,a,e,0,t,u,o,k,p,b,d),v!=c||0===k[0]&&a>257?(v==g?q.msg="oversubscribed distance tree":v==i?(q.msg="incomplete distance tree",v=g):v!=h&&(q.msg="empty distance tree with lengths",v=g),v):c)}}function H(){function u(a,b,e,f,h,i,k,l){var m,n,o,p,y,z,A,B,s=l.next_in_index,t=l.avail_in,q=k.bitb,r=k.bitk,u=k.write,v=u<k.read?k.read-u-1:k.end-u,w=j[a],x=j[b];do{for(;20>r;)t--,q|=(255&l.read_byte(s++))<<r,r+=8;if(m=q&w,n=e,o=f,B=3*(o+m),0!==(p=n[B]))for(;;){if(q>>=n[B+1],r-=n[B+1],0!==(16&p)){for(p&=15,y=n[B+2]+(q&j[p]),q>>=p,r-=p;15>r;)t--,q|=(255&l.read_byte(s++))<<r,r+=8;for(m=q&x,n=h,o=i,B=3*(o+m),p=n[B];;){if(q>>=n[B+1],r-=n[B+1],0!==(16&p)){for(p&=15;p>r;)t--,q|=(255&l.read_byte(s++))<<r,r+=8;if(z=n[B+2]+(q&j[p]),q>>=p,r-=p,v-=y,u>=z)A=u-z,u-A>0&&2>u-A?(k.window[u++]=k.window[A++],k.window[u++]=k.window[A++],y-=2):(k.window.set(k.window.subarray(A,A+2),u),u+=2,A+=2,y-=2);else{A=u-z;do A+=k.end;while(0>A);if(p=k.end-A,y>p){if(y-=p,u-A>0&&p>u-A){do k.window[u++]=k.window[A++];while(0!==--p)}else k.window.set(k.window.subarray(A,A+p),u),u+=p,A+=p,p=0;A=0}}if(u-A>0&&y>u-A){do k.window[u++]=k.window[A++];while(0!==--y)}else k.window.set(k.window.subarray(A,A+y),u),u+=y,A+=y,y=0;break}if(0!==(64&p))return l.msg="invalid distance code",y=l.avail_in-t,y=y>r>>3?r>>3:y,t+=y,s-=y,r-=y<<3,k.bitb=q,k.bitk=r,l.avail_in=t,l.total_in+=s-l.next_in_index,l.next_in_index=s,k.write=u,g;m+=n[B+2],m+=q&j[p],B=3*(o+m),p=n[B]}break}if(0!==(64&p))return 0!==(32&p)?(y=l.avail_in-t,y=y>r>>3?r>>3:y,t+=y,s-=y,r-=y<<3,k.bitb=q,k.bitk=r,l.avail_in=t,l.total_in+=s-l.next_in_index,l.next_in_index=s,k.write=u,d):(l.msg="invalid literal/length code",y=l.avail_in-t,y=y>r>>3?r>>3:y,t+=y,s-=y,r-=y<<3,k.bitb=q,k.bitk=r,l.avail_in=t,l.total_in+=s-l.next_in_index,l.next_in_index=s,k.write=u,g);if(m+=n[B+2],m+=q&j[p],B=3*(o+m),0===(p=n[B])){q>>=n[B+1],r-=n[B+1],k.window[u++]=n[B+2],v--;break}}else q>>=n[B+1],r-=n[B+1],k.window[u++]=n[B+2],v--}while(v>=258&&t>=10);return y=l.avail_in-t,y=y>r>>3?r>>3:y,t+=y,s-=y,r-=y<<3,k.bitb=q,k.bitk=r,l.avail_in=t,l.total_in+=s-l.next_in_index,l.next_in_index=s,k.write=u,c}var b,h,q,s,a=this,e=0,i=0,k=0,l=0,m=0,n=0,o=0,p=0,r=0,t=0;a.init=function(a,c,d,e,f,g){b=x,o=a,p=c,q=d,r=e,s=f,t=g,h=null},a.proc=function(a,v,w){var H,I,J,N,O,P,Q,K=0,L=0,M=0;for(M=v.next_in_index,N=v.avail_in,K=a.bitb,L=a.bitk,O=a.write,P=O<a.read?a.read-O-1:a.end-O;;)switch(b){case x:if(P>=258&&N>=10&&(a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,w=u(o,p,q,r,s,t,a,v),M=v.next_in_index,N=v.avail_in,K=a.bitb,L=a.bitk,O=a.write,P=O<a.read?a.read-O-1:a.end-O,w!=c)){b=w==d?E:G;break}k=o,h=q,i=r,b=y;case y:for(H=k;H>L;){if(0===N)return a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);w=c,N--,K|=(255&v.read_byte(M++))<<L,L+=8}if(I=3*(i+(K&j[H])),K>>>=h[I+1],L-=h[I+1],J=h[I],0===J){l=h[I+2],b=D;break}if(0!==(16&J)){m=15&J,e=h[I+2],b=z;break}if(0===(64&J)){k=J,i=I/3+h[I+2];break}if(0!==(32&J)){b=E;break}return b=G,v.msg="invalid literal/length code",w=g,a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);case z:for(H=m;H>L;){if(0===N)return a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);w=c,N--,K|=(255&v.read_byte(M++))<<L,L+=8}e+=K&j[H],K>>=H,L-=H,k=p,h=s,i=t,b=A;case A:for(H=k;H>L;){if(0===N)return a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);w=c,N--,K|=(255&v.read_byte(M++))<<L,L+=8}if(I=3*(i+(K&j[H])),K>>=h[I+1],L-=h[I+1],J=h[I],0!==(16&J)){m=15&J,n=h[I+2],b=B;break}if(0===(64&J)){k=J,i=I/3+h[I+2];break}return b=G,v.msg="invalid distance code",w=g,a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);case B:for(H=m;H>L;){if(0===N)return a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);w=c,N--,K|=(255&v.read_byte(M++))<<L,L+=8}n+=K&j[H],K>>=H,L-=H,b=C;case C:for(Q=O-n;0>Q;)Q+=a.end;for(;0!==e;){if(0===P&&(O==a.end&&0!==a.read&&(O=0,P=O<a.read?a.read-O-1:a.end-O),0===P&&(a.write=O,w=a.inflate_flush(v,w),O=a.write,P=O<a.read?a.read-O-1:a.end-O,O==a.end&&0!==a.read&&(O=0,P=O<a.read?a.read-O-1:a.end-O),0===P)))return a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);a.window[O++]=a.window[Q++],P--,Q==a.end&&(Q=0),e--}b=x;break;case D:if(0===P&&(O==a.end&&0!==a.read&&(O=0,P=O<a.read?a.read-O-1:a.end-O),0===P&&(a.write=O,w=a.inflate_flush(v,w),O=a.write,P=O<a.read?a.read-O-1:a.end-O,O==a.end&&0!==a.read&&(O=0,P=O<a.read?a.read-O-1:a.end-O),0===P)))return a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);w=c,a.window[O++]=l,P--,b=x;break;case E:if(L>7&&(L-=8,N++,M--),a.write=O,w=a.inflate_flush(v,w),O=a.write,P=O<a.read?a.read-O-1:a.end-O,a.read!=a.write)return a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);b=F;case F:return w=d,a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);case G:return w=g,a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);default:return w=f,a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w)}},a.free=function(){}}function T(a,b){var o,e=this,h=J,l=0,m=0,n=0,p=[0],q=[0],r=new H,s=0,t=new Int32Array(3*k),u=0,v=new w;e.bitk=0,e.bitb=0,e.window=new Uint8Array(b),e.end=b,e.read=0,e.write=0,e.reset=function(a,b){b&&(b[0]=u),h==P&&r.free(a),h=J,e.bitk=0,e.bitb=0,e.read=e.write=0},e.reset(a,null),e.inflate_flush=function(a,b){var f=a.next_out_index,g=e.read,d=(g<=e.write?e.write:e.end)-g;return d>a.avail_out&&(d=a.avail_out),0!==d&&b==i&&(b=c),a.avail_out-=d,a.total_out+=d,a.next_out.set(e.window.subarray(g,g+d),f),f+=d,g+=d,g==e.end&&(g=0,e.write==e.end&&(e.write=0),d=e.write-g,d>a.avail_out&&(d=a.avail_out),0!==d&&b==i&&(b=c),a.avail_out-=d,a.total_out+=d,a.next_out.set(e.window.subarray(g,g+d),f),f+=d,g+=d),a.next_out_index=f,e.read=g,b},e.proc=function(a,b){for(var i,B,C,D,E,F,G,H,T,U,V,W,x=a.next_in_index,y=a.avail_in,k=e.bitb,u=e.bitk,z=e.write,A=z<e.read?e.read-z-1:e.end-z;;)switch(h){case J:for(;3>u;){if(0===y)return e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);b=c,y--,k|=(255&a.read_byte(x++))<<u,u+=8}switch(i=7&k,s=1&i,i>>>1){case 0:k>>>=3,u-=3,i=7&u,k>>>=i,u-=i,h=K;break;case 1:C=[],D=[],E=[[]],F=[[]],w.inflate_trees_fixed(C,D,E,F),r.init(C[0],D[0],E[0],0,F[0],0),k>>>=3,u-=3,h=P;break;case 2:k>>>=3,u-=3,h=M;break;case 3:return k>>>=3,u-=3,h=S,a.msg="invalid block type",b=g,e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b)}break;case K:for(;32>u;){if(0===y)return e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);b=c,y--,k|=(255&a.read_byte(x++))<<u,u+=8}if((65535&~k>>>16)!=(65535&k))return h=S,a.msg="invalid stored block lengths",b=g,e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);l=65535&k,k=u=0,h=0!==l?L:0!==s?Q:J;break;case L:if(0===y)return e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);if(0===A&&(z==e.end&&0!==e.read&&(z=0,A=z<e.read?e.read-z-1:e.end-z),0===A&&(e.write=z,b=e.inflate_flush(a,b),z=e.write,A=z<e.read?e.read-z-1:e.end-z,z==e.end&&0!==e.read&&(z=0,A=z<e.read?e.read-z-1:e.end-z),0===A)))return e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);if(b=c,i=l,i>y&&(i=y),i>A&&(i=A),e.window.set(a.read_buf(x,i),z),x+=i,y-=i,z+=i,A-=i,0!==(l-=i))break;h=0!==s?Q:J;break;case M:for(;14>u;){if(0===y)return e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);b=c,y--,k|=(255&a.read_byte(x++))<<u,u+=8}if(m=i=16383&k,(31&i)>29||(31&i>>5)>29)return h=S,a.msg="too many length or distance symbols",b=g,e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);if(i=258+(31&i)+(31&i>>5),!o||o.length<i)o=[];else for(B=0;i>B;B++)o[B]=0;k>>>=14,u-=14,n=0,h=N;case N:for(;4+(m>>>10)>n;){for(;3>u;){if(0===y)return e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);b=c,y--,k|=(255&a.read_byte(x++))<<u,u+=8}o[I[n++]]=7&k,k>>>=3,u-=3}for(;19>n;)o[I[n++]]=0;if(p[0]=7,i=v.inflate_trees_bits(o,p,q,t,a),i!=c)return b=i,b==g&&(o=null,h=S),e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);n=0,h=O;case O:for(;;){if(i=m,n>=258+(31&i)+(31&i>>5))break;for(i=p[0];i>u;){if(0===y)return e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);b=c,y--,k|=(255&a.read_byte(x++))<<u,u+=8}if(i=t[3*(q[0]+(k&j[i]))+1],H=t[3*(q[0]+(k&j[i]))+2],16>H)k>>>=i,u-=i,o[n++]=H;else{for(B=18==H?7:H-14,G=18==H?11:3;i+B>u;){if(0===y)return e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);b=c,y--,k|=(255&a.read_byte(x++))<<u,u+=8}if(k>>>=i,u-=i,G+=k&j[B],k>>>=B,u-=B,B=n,i=m,B+G>258+(31&i)+(31&i>>5)||16==H&&1>B)return o=null,h=S,a.msg="invalid bit length repeat",b=g,e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);H=16==H?o[B-1]:0;do o[B++]=H;while(0!==--G);n=B}}if(q[0]=-1,T=[],U=[],V=[],W=[],T[0]=9,U[0]=6,i=m,i=v.inflate_trees_dynamic(257+(31&i),1+(31&i>>5),o,T,U,V,W,t,a),i!=c)return i==g&&(o=null,h=S),b=i,e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);r.init(T[0],U[0],t,V[0],t,W[0]),h=P;case P:if(e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,(b=r.proc(e,a,b))!=d)return e.inflate_flush(a,b);if(b=c,r.free(a),x=a.next_in_index,y=a.avail_in,k=e.bitb,u=e.bitk,z=e.write,A=z<e.read?e.read-z-1:e.end-z,0===s){h=J;break}h=Q;case Q:if(e.write=z,b=e.inflate_flush(a,b),z=e.write,A=z<e.read?e.read-z-1:e.end-z,e.read!=e.write)return e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);h=R;case R:return b=d,e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);case S:return b=g,e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);default:return b=f,e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b)}},e.free=function(a){e.reset(a,null),e.window=null,t=null},e.set_dictionary=function(a,b,c){e.window.set(a.subarray(b,b+c),0),e.read=e.write=c},e.sync_point=function(){return h==K?1:0}}function fb(){function b(a){return a&&a.istate?(a.total_in=a.total_out=0,a.msg=null,a.istate.mode=bb,a.istate.blocks.reset(a,null),c):f}var a=this;a.mode=0,a.method=0,a.was=[0],a.need=0,a.marker=0,a.wbits=0,a.inflateEnd=function(b){return a.blocks&&a.blocks.free(b),a.blocks=null,c},a.inflateInit=function(d,e){return d.msg=null,a.blocks=null,8>e||e>15?(a.inflateEnd(d),f):(a.wbits=e,d.istate.blocks=new T(d,1<<e),b(d),c)},a.inflate=function(a,b){var h,j;if(!a||!a.istate||!a.next_in)return f;for(b=b==m?i:c,h=i;;)switch(a.istate.mode){case W:if(0===a.avail_in)return h;if(h=b,a.avail_in--,a.total_in++,(15&(a.istate.method=a.read_byte(a.next_in_index++)))!=V){a.istate.mode=db,a.msg="unknown compression method",a.istate.marker=5;break}if((a.istate.method>>4)+8>a.istate.wbits){a.istate.mode=db,a.msg="invalid window size",a.istate.marker=5;break}a.istate.mode=X;case X:if(0===a.avail_in)return h;if(h=b,a.avail_in--,a.total_in++,j=255&a.read_byte(a.next_in_index++),0!==((a.istate.method<<8)+j)%31){a.istate.mode=db,a.msg="incorrect header check",a.istate.marker=5;break}if(0===(j&U)){a.istate.mode=bb;break}a.istate.mode=Y;case Y:if(0===a.avail_in)return h;h=b,a.avail_in--,a.total_in++,a.istate.need=4278190080&(255&a.read_byte(a.next_in_index++))<<24,a.istate.mode=Z;case Z:if(0===a.avail_in)return h;h=b,a.avail_in--,a.total_in++,a.istate.need+=16711680&(255&a.read_byte(a.next_in_index++))<<16,a.istate.mode=$;case $:if(0===a.avail_in)return h;h=b,a.avail_in--,a.total_in++,a.istate.need+=65280&(255&a.read_byte(a.next_in_index++))<<8,a.istate.mode=_;case _:return 0===a.avail_in?h:(h=b,a.avail_in--,a.total_in++,a.istate.need+=255&a.read_byte(a.next_in_index++),a.istate.mode=ab,e);case ab:return a.istate.mode=db,a.msg="need dictionary",a.istate.marker=0,f;case bb:if(h=a.istate.blocks.proc(a,h),h==g){a.istate.mode=db,a.istate.marker=0;break}if(h==c&&(h=b),h!=d)return h;h=b,a.istate.blocks.reset(a,a.istate.was),a.istate.mode=cb;case cb:return d;case db:return g;default:return f}},a.inflateSetDictionary=function(a,b,d){var e=0,g=d;return a&&a.istate&&a.istate.mode==ab?(g>=1<<a.istate.wbits&&(g=(1<<a.istate.wbits)-1,e=d-g),a.istate.blocks.set_dictionary(b,e,g),a.istate.mode=bb,c):f},a.inflateSync=function(a){var d,e,h,j,k;if(!a||!a.istate)return f;if(a.istate.mode!=db&&(a.istate.mode=db,a.istate.marker=0),0===(d=a.avail_in))return i;for(e=a.next_in_index,h=a.istate.marker;0!==d&&4>h;)a.read_byte(e)==eb[h]?h++:h=0!==a.read_byte(e)?0:4-h,e++,d--;return a.total_in+=e-a.next_in_index,a.next_in_index=e,a.avail_in=d,a.istate.marker=h,4!=h?g:(j=a.total_in,k=a.total_out,b(a),a.total_in=j,a.total_out=k,a.istate.mode=bb,c)},a.inflateSyncPoint=function(a){return a&&a.istate&&a.istate.blocks?a.istate.blocks.sync_point():f}}function gb(){}function hb(){var a=this,b=new gb,e=512,f=l,g=new Uint8Array(e),h=!1;b.inflateInit(),b.next_out=g,a.append=function(a,j){var k,p,l=[],m=0,n=0,o=0;if(0!==a.length){b.next_in_index=0,b.next_in=a,b.avail_in=a.length;do{if(b.next_out_index=0,b.avail_out=e,0!==b.avail_in||h||(b.next_in_index=0,h=!0),k=b.inflate(f),h&&k===i){if(0!==b.avail_in)throw new Error("inflating: bad input")}else if(k!==c&&k!==d)throw new Error("inflating: "+b.msg);if((h||k===d)&&b.avail_in===a.length)throw new Error("inflating: bad input");b.next_out_index&&(b.next_out_index===e?l.push(new Uint8Array(g)):l.push(new Uint8Array(g.subarray(0,b.next_out_index)))),o+=b.next_out_index,j&&b.next_in_index>0&&b.next_in_index!=m&&(j(b.next_in_index),m=b.next_in_index)}while(b.avail_in>0||0===b.avail_out);return p=new Uint8Array(o),l.forEach(function(a){p.set(a,n),n+=a.length}),p}},a.flush=function(){b.inflateEnd()}}var x,y,z,A,B,C,D,E,F,G,I,J,K,L,M,N,O,P,Q,R,S,U,V,W,X,Y,Z,$,_,ab,bb,cb,db,eb,ib,b=15,c=0,d=1,e=2,f=-2,g=-3,h=-4,i=-5,j=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],k=1440,l=0,m=4,n=9,o=5,p=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],q=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],r=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],s=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],t=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],u=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],v=15;w.inflate_trees_fixed=function(a,b,d,e){return a[0]=n,b[0]=o,d[0]=p,e[0]=q,c},x=0,y=1,z=2,A=3,B=4,C=5,D=6,E=7,F=8,G=9,I=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],J=0,K=1,L=2,M=3,N=4,O=5,P=6,Q=7,R=8,S=9,U=32,V=8,W=0,X=1,Y=2,Z=3,$=4,_=5,ab=6,bb=7,cb=12,db=13,eb=[0,0,255,255],gb.prototype={inflateInit:function(a){var c=this;return c.istate=new fb,a||(a=b),c.istate.inflateInit(c,a)},inflate:function(a){var b=this;return b.istate?b.istate.inflate(b,a):f},inflateEnd:function(){var b,a=this;return a.istate?(b=a.istate.inflateEnd(a),a.istate=null,b):f},inflateSync:function(){var a=this;return a.istate?a.istate.inflateSync(a):f},inflateSetDictionary:function(a,b){var c=this;return c.istate?c.istate.inflateSetDictionary(c,a,b):f},read_byte:function(a){var b=this;return b.next_in.subarray(a,a+1)[0]},read_buf:function(a,b){var c=this;return c.next_in.subarray(a,a+b)}},ib=a.zip||a,ib.Inflater=ib._jzlib_Inflater=hb}!function(a){"use strict";function d(){inflate(a),postMessage({type:"importScripts"})}function e(b){var d=a[b.codecClass],e=b.sn;if(c[e])throw Error("duplicated sn");c[e]={codec:new d(b.options),crcInput:"input"===b.crcType,crcOutput:"output"===b.crcType,crc:new j},postMessage({type:"newTask",sn:e})}function g(a){var i,j,k,m,n,o,p,b=a.sn,d=a.type,g=a.data,h=c[b];if(!h&&a.codecClass&&(e(a),h=c[b]),i="append"===d,j=f(),i)try{k=h.codec.append(g,function(a){postMessage({type:"progress",sn:b,loaded:a})})}catch(l){throw delete c[b],l}else delete c[b],k=h.codec.flush();m=f()-j,j=f(),g&&h.crcInput&&h.crc.append(g),k&&h.crcOutput&&h.crc.append(k),n=f()-j,o={type:d,sn:b,codecTime:m,crcTime:n},p=[],k&&(o.data=k,p.push(k.buffer)),i||!h.crcInput&&!h.crcOutput||(o.crc=h.crc.get());try{postMessage(o,p)}catch(q){postMessage(o)}}function h(a,b,c){var d={type:a,sn:b,error:i(c)};postMessage(d)}function i(a){return{message:a.message,stack:a.stack}}function j(){this.crc=-1}function k(){}var b,c,f;if(a.zWorkerInitialized)throw new Error("z-worker.js should be run only once");a.zWorkerInitialized=!0,addEventListener("message",function(a){var c=a.data,d=c.type,e=c.sn,f=b[d];if(f)try{f(c)}catch(g){h(d,e,g)}postMessage({type:"echo",originalType:d,sn:e})}),b={importScripts:d,newTask:e,append:g,flush:g},c={},f=a.performance?a.performance.now.bind(a.performance):Date.now,j.prototype.append=function(a){var d,e,b=0|this.crc,c=this.table;for(d=0,e=0|a.length;e>d;d++)b=b>>>8^c[255&(b^a[d])];this.crc=b},j.prototype.get=function(){return~this.crc},j.prototype.table=function(){var a,b,c,d=[];for(a=0;256>a;a++){for(c=a,b=0;8>b;b++)1&c?c=3988292384^c>>>1:c>>>=1;d[a]=c}return d}(),a.NOOP=k,k.prototype.append=function(a){return a},k.prototype.flush=function(){}}(this);';
},{}],"../node_modules/isomorphic-unzip/lib/browser/zip.js":[function(require,module,exports) {

/*
 Modified from https://gildas-lormeau.github.io/zip.js/, we do a little change to let it work fine with Browserfy/Webpack.

 Copyright (c) 2013 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

// import zWorkerCode from './z-worker';
// import zWorkerCode from 'raw!./z-worker';
var workerRawString = require('./z-worker');

var zWorker = URL.createObjectURL(new Blob([workerRawString], {
  type: 'text/javascript'
}));

var ERR_BAD_FORMAT = 'File format is not recognized.';
var ERR_CRC = 'CRC failed.';
var ERR_ENCRYPTED = 'File contains encrypted entry.';
var ERR_ZIP64 = 'File is using Zip64 (4gb+ file size).';
var ERR_READ = 'Error while reading zip file.';
var ERR_WRITE = 'Error while writing zip file.';
var ERR_WRITE_DATA = 'Error while writing file data.';
var ERR_READ_DATA = 'Error while reading file data.';
var ERR_DUPLICATED_NAME = 'File already exists.';
var CHUNK_SIZE = 512 * 1024;

var TEXT_PLAIN = 'text/plain';

var appendABViewSupported;
try {
  appendABViewSupported = new Blob([new DataView(new ArrayBuffer(0))]).size === 0;
} catch (err) {
  appendABViewSupported = undefined;
}

var zip = {};

////////////

function Crc32() {
  this.crc = -1;
}

Crc32.prototype.append = function append(data) {
  var crc = this.crc | 0, table = this.table;
  for (var offset = 0, len = data.length | 0; offset < len; offset++)
    crc = (crc >>> 8) ^ table[(crc ^ data[offset]) & 0xFF];
  this.crc = crc;
};
Crc32.prototype.get = function get() {
  return ~this.crc;
};
Crc32.prototype.table = (function() {
  var i, j, t, table = []; // Uint32Array is actually slower than []
  for (i = 0; i < 256; i++) {
    t = i;
    for (j = 0; j < 8; j++)
      if (t & 1)
        t = (t >>> 1) ^ 0xEDB88320;
      else
        t = t >>> 1;
    table[i] = t;
  }
  return table;
})();

// "no-op" codec
function NOOP() {
}

NOOP.prototype.append = function append(bytes, onprogress) {
  return bytes;
};
NOOP.prototype.flush = function flush() {
};

function blobSlice(blob, index, length) {
  if (index < 0 || length < 0 || index + length > blob.size)
    throw new RangeError('offset:' + index + ', length:' + length + ', size:' + blob.size);
  if (blob.slice)
    return blob.slice(index, index + length);
  else if (blob.webkitSlice)
    return blob.webkitSlice(index, index + length);
  else if (blob.mozSlice)
    return blob.mozSlice(index, index + length);
  else if (blob.msSlice)
    return blob.msSlice(index, index + length);
}

function getDataHelper(byteLength, bytes) {
  var dataBuffer, dataArray;
  dataBuffer = new ArrayBuffer(byteLength);
  dataArray = new Uint8Array(dataBuffer);
  if (bytes)
    dataArray.set(bytes, 0);
  return {
    buffer: dataBuffer,
    array: dataArray,
    view: new DataView(dataBuffer)
  };
}

// Readers
function Reader() {
}

function TextReader(text) {
  var that = this, blobReader;

  function init(callback, onerror) {
    var blob = new Blob([text], {
      type: TEXT_PLAIN
    });
    blobReader = new BlobReader(blob);
    blobReader.init(function() {
      that.size = blobReader.size;
      callback();
    }, onerror);
  }

  function readUint8Array(index, length, callback, onerror) {
    blobReader.readUint8Array(index, length, callback, onerror);
  }

  that.size = 0;
  that.init = init;
  that.readUint8Array = readUint8Array;
}

TextReader.prototype = new Reader();
TextReader.prototype.constructor = TextReader;

function Data64URIReader(dataURI) {
  var that = this, dataStart;

  function init(callback) {
    var dataEnd = dataURI.length;
    while (dataURI.charAt(dataEnd - 1) == "=")
      dataEnd--;
    dataStart = dataURI.indexOf(",") + 1;
    that.size = Math.floor((dataEnd - dataStart) * 0.75);
    callback();
  }

  function readUint8Array(index, length, callback) {
    var i, data = getDataHelper(length);
    var start = Math.floor(index / 3) * 4;
    var end = Math.ceil((index + length) / 3) * 4;
    var bytes = atob(dataURI.substring(start + dataStart, end + dataStart));
    var delta = index - Math.floor(start / 4) * 3;
    for (i = delta; i < delta + length; i++)
      data.array[i - delta] = bytes.charCodeAt(i);
    callback(data.array);
  }

  that.size = 0;
  that.init = init;
  that.readUint8Array = readUint8Array;
}

Data64URIReader.prototype = new Reader();
Data64URIReader.prototype.constructor = Data64URIReader;

function BlobReader(blob) {
  var that = this;

  function init(callback) {
    that.size = blob.size;
    callback();
  }

  function readUint8Array(index, length, callback, onerror) {
    var reader = new FileReader();
    reader.onload = function(e) {
      callback(new Uint8Array(e.target.result));
    };
    reader.onerror = onerror;
    try {
      reader.readAsArrayBuffer(blobSlice(blob, index, length));
    } catch (e) {
      onerror(e);
    }
  }

  that.size = 0;
  that.init = init;
  that.readUint8Array = readUint8Array;
}

BlobReader.prototype = new Reader();
BlobReader.prototype.constructor = BlobReader;

// Writers

function Writer() {
}

Writer.prototype.getData = function(callback) {
  callback(this.data);
};

function TextWriter(encoding) {
  var that = this, blob;

  function init(callback) {
    blob = new Blob([], {
      type: TEXT_PLAIN
    });
    callback();
  }

  function writeUint8Array(array, callback) {
    blob = new Blob([blob, appendABViewSupported ? array : array.buffer], {
      type: TEXT_PLAIN
    });
    callback();
  }

  function getData(callback, onerror) {
    var reader = new FileReader();
    reader.onload = function(e) {
      callback(e.target.result);
    };
    reader.onerror = onerror;
    reader.readAsText(blob, encoding);
  }

  that.init = init;
  that.writeUint8Array = writeUint8Array;
  that.getData = getData;
}

TextWriter.prototype = new Writer();
TextWriter.prototype.constructor = TextWriter;

function Data64URIWriter(contentType) {
  var that = this, data = "", pending = "";

  function init(callback) {
    data += "data:" + (contentType || "") + ";base64,";
    callback();
  }

  function writeUint8Array(array, callback) {
    var i, delta = pending.length, dataString = pending;
    pending = "";
    for (i = 0; i < (Math.floor((delta + array.length) / 3) * 3) - delta; i++)
      dataString += String.fromCharCode(array[i]);
    for (; i < array.length; i++)
      pending += String.fromCharCode(array[i]);
    if (dataString.length > 2)
      data += btoa(dataString);
    else
      pending = dataString;
    callback();
  }

  function getData(callback) {
    callback(data + btoa(pending));
  }

  that.init = init;
  that.writeUint8Array = writeUint8Array;
  that.getData = getData;
}

Data64URIWriter.prototype = new Writer();
Data64URIWriter.prototype.constructor = Data64URIWriter;

function BlobWriter(contentType) {
  var blob, that = this;

  function init(callback) {
    blob = new Blob([], {
      type: contentType
    });
    callback();
  }

  function writeUint8Array(array, callback) {
    blob = new Blob([blob, appendABViewSupported ? array : array.buffer], {
      type: contentType
    });
    callback();
  }

  function getData(callback) {
    callback(blob);
  }

  that.init = init;
  that.writeUint8Array = writeUint8Array;
  that.getData = getData;
}

BlobWriter.prototype = new Writer();
BlobWriter.prototype.constructor = BlobWriter;

/**
 * inflate/deflate core functions
 * @param worker {Worker} web worker for the task.
 * @param initialMessage {Object} initial message to be sent to the worker. should contain
 *   sn(serial number for distinguishing multiple tasks sent to the worker), and codecClass.
 *   This function may add more properties before sending.
 */
function launchWorkerProcess(worker, initialMessage, reader, writer, offset, size, onprogress, onend, onreaderror, onwriteerror) {
  var chunkIndex = 0, index, outputSize, sn = initialMessage.sn, crc;

  function onflush() {
    worker.removeEventListener('message', onmessage, false);
    onend(outputSize, crc);
  }

  function onmessage(event) {
    var message = event.data, data = message.data, err = message.error;
    if (err) {
      err.toString = function() {
        return 'Error: ' + this.message;
      };
      onreaderror(err);
      return;
    }
    if (message.sn !== sn)
      return;
    if (typeof message.codecTime === 'number')
      worker.codecTime += message.codecTime; // should be before onflush()
    if (typeof message.crcTime === 'number')
      worker.crcTime += message.crcTime;

    switch (message.type) {
      case 'append':
        if (data) {
          outputSize += data.length;
          writer.writeUint8Array(data, function() {
            step();
          }, onwriteerror);
        } else
          step();
        break;
      case 'flush':
        crc = message.crc;
        if (data) {
          outputSize += data.length;
          writer.writeUint8Array(data, function() {
            onflush();
          }, onwriteerror);
        } else
          onflush();
        break;
      case 'progress':
        if (onprogress)
          onprogress(index + message.loaded, size);
        break;
      case 'importScripts': //no need to handle here
      case 'newTask':
      case 'echo':
        break;
      default:
        console.warn('zip.js:launchWorkerProcess: unknown message: ', message);
    }
  }

  function step() {
    index = chunkIndex * CHUNK_SIZE;
    // use `<=` instead of `<`, because `size` may be 0.
    if (index <= size) {
      reader.readUint8Array(offset + index, Math.min(CHUNK_SIZE, size - index), function(array) {
        if (onprogress)
          onprogress(index, size);
        var msg = index === 0 ? initialMessage : {sn: sn};
        msg.type = 'append';
        msg.data = array;

        // posting a message with transferables will fail on IE10
        try {
          worker.postMessage(msg, [array.buffer]);
        } catch (ex) {
          worker.postMessage(msg); // retry without transferables
        }
        chunkIndex++;
      }, onreaderror);
    } else {
      worker.postMessage({
        sn: sn,
        type: 'flush'
      });
    }
  }

  outputSize = 0;
  worker.addEventListener('message', onmessage, false);
  step();
}

function launchProcess(process, reader, writer, offset, size, crcType, onprogress, onend, onreaderror, onwriteerror) {
  var chunkIndex = 0, index, outputSize = 0,
    crcInput = crcType === 'input',
    crcOutput = crcType === 'output',
    crc = new Crc32();

  function step() {
    var outputData;
    index = chunkIndex * CHUNK_SIZE;
    if (index < size)
      reader.readUint8Array(offset + index, Math.min(CHUNK_SIZE, size - index), function(inputData) {
        var outputData;
        try {
          outputData = process.append(inputData, function(loaded) {
            if (onprogress)
              onprogress(index + loaded, size);
          });
        } catch (e) {
          onreaderror(e);
          return;
        }
        if (outputData) {
          outputSize += outputData.length;
          writer.writeUint8Array(outputData, function() {
            chunkIndex++;
            setTimeout(step, 1);
          }, onwriteerror);
          if (crcOutput)
            crc.append(outputData);
        } else {
          chunkIndex++;
          setTimeout(step, 1);
        }
        if (crcInput)
          crc.append(inputData);
        if (onprogress)
          onprogress(index, size);
      }, onreaderror);
    else {
      try {
        outputData = process.flush();
      } catch (e) {
        onreaderror(e);
        return;
      }
      if (outputData) {
        if (crcOutput)
          crc.append(outputData);
        outputSize += outputData.length;
        writer.writeUint8Array(outputData, function() {
          onend(outputSize, crc.get());
        }, onwriteerror);
      } else
        onend(outputSize, crc.get());
    }
  }

  step();
}

function inflate(worker, sn, reader, writer, offset, size, computeCrc32, onend, onprogress, onreaderror, onwriteerror) {
  var crcType = computeCrc32 ? 'output' : 'none';
  if (zip.useWebWorkers) {
    var initialMessage = {
      sn: sn,
      codecClass: 'Inflater',
      crcType: crcType,
    };
    launchWorkerProcess(worker, initialMessage, reader, writer, offset, size, onprogress, onend, onreaderror, onwriteerror);
  } else
    launchProcess(new zip.Inflater(), reader, writer, offset, size, crcType, onprogress, onend, onreaderror, onwriteerror);
}

function deflate(worker, sn, reader, writer, level, onend, onprogress, onreaderror, onwriteerror) {
  var crcType = 'input';
  if (zip.useWebWorkers) {
    var initialMessage = {
      sn: sn,
      options: {level: level},
      codecClass: 'Deflater',
      crcType: crcType,
    };
    launchWorkerProcess(worker, initialMessage, reader, writer, 0, reader.size, onprogress, onend, onreaderror, onwriteerror);
  } else
    launchProcess(new zip.Deflater(), reader, writer, 0, reader.size, crcType, onprogress, onend, onreaderror, onwriteerror);
}

function copy(worker, sn, reader, writer, offset, size, computeCrc32, onend, onprogress, onreaderror, onwriteerror) {
  var crcType = 'input';
  if (zip.useWebWorkers && computeCrc32) {
    var initialMessage = {
      sn: sn,
      codecClass: 'NOOP',
      crcType: crcType,
    };
    launchWorkerProcess(worker, initialMessage, reader, writer, offset, size, onprogress, onend, onreaderror, onwriteerror);
  } else
    launchProcess(new NOOP(), reader, writer, offset, size, crcType, onprogress, onend, onreaderror, onwriteerror);
}

// ZipReader

function decodeASCII(str) {
  var i, out = "", charCode, extendedASCII = ['\u00C7', '\u00FC', '\u00E9', '\u00E2', '\u00E4', '\u00E0', '\u00E5', '\u00E7', '\u00EA', '\u00EB',
    '\u00E8', '\u00EF', '\u00EE', '\u00EC', '\u00C4', '\u00C5', '\u00C9', '\u00E6', '\u00C6', '\u00F4', '\u00F6', '\u00F2', '\u00FB', '\u00F9',
    '\u00FF', '\u00D6', '\u00DC', '\u00F8', '\u00A3', '\u00D8', '\u00D7', '\u0192', '\u00E1', '\u00ED', '\u00F3', '\u00FA', '\u00F1', '\u00D1',
    '\u00AA', '\u00BA', '\u00BF', '\u00AE', '\u00AC', '\u00BD', '\u00BC', '\u00A1', '\u00AB', '\u00BB', '_', '_', '_', '\u00A6', '\u00A6',
    '\u00C1', '\u00C2', '\u00C0', '\u00A9', '\u00A6', '\u00A6', '+', '+', '\u00A2', '\u00A5', '+', '+', '-', '-', '+', '-', '+', '\u00E3',
    '\u00C3', '+', '+', '-', '-', '\u00A6', '-', '+', '\u00A4', '\u00F0', '\u00D0', '\u00CA', '\u00CB', '\u00C8', 'i', '\u00CD', '\u00CE',
    '\u00CF', '+', '+', '_', '_', '\u00A6', '\u00CC', '_', '\u00D3', '\u00DF', '\u00D4', '\u00D2', '\u00F5', '\u00D5', '\u00B5', '\u00FE',
    '\u00DE', '\u00DA', '\u00DB', '\u00D9', '\u00FD', '\u00DD', '\u00AF', '\u00B4', '\u00AD', '\u00B1', '_', '\u00BE', '\u00B6', '\u00A7',
    '\u00F7', '\u00B8', '\u00B0', '\u00A8', '\u00B7', '\u00B9', '\u00B3', '\u00B2', '_', ' '];
  for (i = 0; i < str.length; i++) {
    charCode = str.charCodeAt(i) & 0xFF;
    if (charCode > 127)
      out += extendedASCII[charCode - 128];
    else
      out += String.fromCharCode(charCode);
  }
  return out;
}

function decodeUTF8(string) {
  return decodeURIComponent(escape(string));
}

function getString(bytes) {
  var i, str = "";
  for (i = 0; i < bytes.length; i++)
    str += String.fromCharCode(bytes[i]);
  return str;
}

function getDate(timeRaw) {
  var date = (timeRaw & 0xffff0000) >> 16, time = timeRaw & 0x0000ffff;
  try {
    return new Date(1980 + ((date & 0xFE00) >> 9), ((date & 0x01E0) >> 5) - 1, date & 0x001F, (time & 0xF800) >> 11, (time & 0x07E0) >> 5,
      (time & 0x001F) * 2, 0);
  } catch (e) {
  }
}

function readCommonHeader(entry, data, index, centralDirectory, onerror) {
  entry.version = data.view.getUint16(index, true);
  entry.bitFlag = data.view.getUint16(index + 2, true);
  entry.compressionMethod = data.view.getUint16(index + 4, true);
  entry.lastModDateRaw = data.view.getUint32(index + 6, true);
  entry.lastModDate = getDate(entry.lastModDateRaw);
  if ((entry.bitFlag & 0x01) === 0x01) {
    onerror(ERR_ENCRYPTED);
    return;
  }
  if (centralDirectory || (entry.bitFlag & 0x0008) != 0x0008) {
    entry.crc32 = data.view.getUint32(index + 10, true);
    entry.compressedSize = data.view.getUint32(index + 14, true);
    entry.uncompressedSize = data.view.getUint32(index + 18, true);
  }
  if (entry.compressedSize === 0xFFFFFFFF || entry.uncompressedSize === 0xFFFFFFFF) {
    onerror(ERR_ZIP64);
    return;
  }
  entry.filenameLength = data.view.getUint16(index + 22, true);
  entry.extraFieldLength = data.view.getUint16(index + 24, true);
}

function createZipReader(reader, callback, onerror) {
  var inflateSN = 0;

  function Entry() {
  }

  Entry.prototype.getData = function(writer, onend, onprogress, checkCrc32) {
    var that = this;

    function testCrc32(crc32) {
      var dataCrc32 = getDataHelper(4);
      dataCrc32.view.setUint32(0, crc32);
      return that.crc32 == dataCrc32.view.getUint32(0);
    }

    function getWriterData(uncompressedSize, crc32) {
      if (checkCrc32 && !testCrc32(crc32))
        onerror(ERR_CRC);
      else
        writer.getData(function(data) {
          onend(data);
        });
    }

    function onreaderror(err) {
      onerror(err || ERR_READ_DATA);
    }

    function onwriteerror(err) {
      onerror(err || ERR_WRITE_DATA);
    }

    reader.readUint8Array(that.offset, 30, function(bytes) {
      var data = getDataHelper(bytes.length, bytes), dataOffset;
      if (data.view.getUint32(0) != 0x504b0304) {
        onerror(ERR_BAD_FORMAT);
        return;
      }
      readCommonHeader(that, data, 4, false, onerror);
      dataOffset = that.offset + 30 + that.filenameLength + that.extraFieldLength;
      writer.init(function() {
        if (that.compressionMethod === 0)
          copy(that._worker, inflateSN++, reader, writer, dataOffset, that.compressedSize, checkCrc32, getWriterData, onprogress, onreaderror, onwriteerror);
        else
          inflate(that._worker, inflateSN++, reader, writer, dataOffset, that.compressedSize, checkCrc32, getWriterData, onprogress, onreaderror, onwriteerror);
      }, onwriteerror);
    }, onreaderror);
  };

  function seekEOCDR(eocdrCallback) {
    // "End of central directory record" is the last part of a zip archive, and is at least 22 bytes long.
    // Zip file comment is the last part of EOCDR and has max length of 64KB,
    // so we only have to search the last 64K + 22 bytes of a archive for EOCDR signature (0x06054b50).
    var EOCDR_MIN = 22;
    if (reader.size < EOCDR_MIN) {
      onerror(ERR_BAD_FORMAT);
      return;
    }
    var ZIP_COMMENT_MAX = 256 * 256, EOCDR_MAX = EOCDR_MIN + ZIP_COMMENT_MAX;

    // In most cases, the EOCDR is EOCDR_MIN bytes long
    doSeek(EOCDR_MIN, function() {
      // If not found, try within EOCDR_MAX bytes
      doSeek(Math.min(EOCDR_MAX, reader.size), function() {
        onerror(ERR_BAD_FORMAT);
      });
    });

    // seek last length bytes of file for EOCDR
    function doSeek(length, eocdrNotFoundCallback) {
      reader.readUint8Array(reader.size - length, length, function(bytes) {
        for (var i = bytes.length - EOCDR_MIN; i >= 0; i--) {
          if (bytes[i] === 0x50 && bytes[i + 1] === 0x4b && bytes[i + 2] === 0x05 && bytes[i + 3] === 0x06) {
            eocdrCallback(new DataView(bytes.buffer, i, EOCDR_MIN));
            return;
          }
        }
        eocdrNotFoundCallback();
      }, function() {
        onerror(ERR_READ);
      });
    }
  }

  var zipReader = {
    getEntries: function(callback) {
      var worker = this._worker;
      // look for End of central directory record
      seekEOCDR(function(dataView) {
        var datalength, fileslength;
        datalength = dataView.getUint32(16, true);
        fileslength = dataView.getUint16(8, true);
        if (datalength < 0 || datalength >= reader.size) {
          onerror(ERR_BAD_FORMAT);
          return;
        }
        reader.readUint8Array(datalength, reader.size - datalength, function(bytes) {
          var i, index = 0, entries = [], entry, filename, comment, data = getDataHelper(bytes.length, bytes);
          for (i = 0; i < fileslength; i++) {
            entry = new Entry();
            entry._worker = worker;
            if (data.view.getUint32(index) != 0x504b0102) {
              onerror(ERR_BAD_FORMAT);
              return;
            }
            readCommonHeader(entry, data, index + 6, true, onerror);
            entry.commentLength = data.view.getUint16(index + 32, true);
            entry.directory = ((data.view.getUint8(index + 38) & 0x10) == 0x10);
            entry.offset = data.view.getUint32(index + 42, true);
            filename = getString(data.array.subarray(index + 46, index + 46 + entry.filenameLength));
            entry.filename = ((entry.bitFlag & 0x0800) === 0x0800) ? decodeUTF8(filename) : decodeASCII(filename);
            if (!entry.directory && entry.filename.charAt(entry.filename.length - 1) == "/")
              entry.directory = true;
            comment = getString(data.array.subarray(index + 46 + entry.filenameLength + entry.extraFieldLength, index + 46
              + entry.filenameLength + entry.extraFieldLength + entry.commentLength));
            entry.comment = ((entry.bitFlag & 0x0800) === 0x0800) ? decodeUTF8(comment) : decodeASCII(comment);
            entries.push(entry);
            index += 46 + entry.filenameLength + entry.extraFieldLength + entry.commentLength;
          }
          callback(entries);
        }, function() {
          onerror(ERR_READ);
        });
      });
    },
    close: function(callback) {
      if (this._worker) {
        this._worker.terminate();
        this._worker = null;
      }
      if (callback)
        callback();
    },
    _worker: null
  };

  if (!zip.useWebWorkers)
    callback(zipReader);
  else {
    createWorker('inflater',
      function(worker) {
        zipReader._worker = worker;
        callback(zipReader);
      },
      function(err) {
        onerror(err);
      }
    );
  }
}

// ZipWriter

function encodeUTF8(string) {
  return unescape(encodeURIComponent(string));
}

function getBytes(str) {
  var i, array = [];
  for (i = 0; i < str.length; i++)
    array.push(str.charCodeAt(i));
  return array;
}

function createZipWriter(writer, callback, onerror, dontDeflate) {
  var files = {}, filenames = [], datalength = 0;
  var deflateSN = 0;

  function onwriteerror(err) {
    onerror(err || ERR_WRITE);
  }

  function onreaderror(err) {
    onerror(err || ERR_READ_DATA);
  }

  var zipWriter = {
    add: function(name, reader, onend, onprogress, options) {
      var header, filename, date;
      var worker = this._worker;

      function writeHeader(callback) {
        var data;
        date = options.lastModDate || new Date();
        header = getDataHelper(26);
        files[name] = {
          headerArray: header.array,
          directory: options.directory,
          filename: filename,
          offset: datalength,
          comment: getBytes(encodeUTF8(options.comment || ''))
        };
        header.view.setUint32(0, 0x14000808);
        if (options.version)
          header.view.setUint8(0, options.version);
        if (!dontDeflate && options.level !== 0 && !options.directory)
          header.view.setUint16(4, 0x0800);
        header.view.setUint16(6, (((date.getHours() << 6) | date.getMinutes()) << 5) | date.getSeconds() / 2, true);
        header.view.setUint16(8, ((((date.getFullYear() - 1980) << 4) | (date.getMonth() + 1)) << 5) | date.getDate(), true);
        header.view.setUint16(22, filename.length, true);
        data = getDataHelper(30 + filename.length);
        data.view.setUint32(0, 0x504b0304);
        data.array.set(header.array, 4);
        data.array.set(filename, 30);
        datalength += data.array.length;
        writer.writeUint8Array(data.array, callback, onwriteerror);
      }

      function writeFooter(compressedLength, crc32) {
        var footer = getDataHelper(16);
        datalength += compressedLength || 0;
        footer.view.setUint32(0, 0x504b0708);
        if (typeof crc32 !== 'undefined') {
          header.view.setUint32(10, crc32, true);
          footer.view.setUint32(4, crc32, true);
        }
        if (reader) {
          footer.view.setUint32(8, compressedLength, true);
          header.view.setUint32(14, compressedLength, true);
          footer.view.setUint32(12, reader.size, true);
          header.view.setUint32(18, reader.size, true);
        }
        writer.writeUint8Array(footer.array, function() {
          datalength += 16;
          onend();
        }, onwriteerror);
      }

      function writeFile() {
        options = options || {};
        name = name.trim();
        if (options.directory && name.charAt(name.length - 1) != "/")
          name += "/";
        if (files.hasOwnProperty(name)) {
          onerror(ERR_DUPLICATED_NAME);
          return;
        }
        filename = getBytes(encodeUTF8(name));
        filenames.push(name);
        writeHeader(function() {
          if (reader)
            if (dontDeflate || options.level === 0)
              copy(worker, deflateSN++, reader, writer, 0, reader.size, true, writeFooter, onprogress, onreaderror, onwriteerror);
            else
              deflate(worker, deflateSN++, reader, writer, options.level, writeFooter, onprogress, onreaderror, onwriteerror);
          else
            writeFooter();
        }, onwriteerror);
      }

      if (reader)
        reader.init(writeFile, onreaderror);
      else
        writeFile();
    },
    close: function(callback) {
      if (this._worker) {
        this._worker.terminate();
        this._worker = null;
      }

      var data, length = 0, index = 0, indexFilename, file;
      for (indexFilename = 0; indexFilename < filenames.length; indexFilename++) {
        file = files[filenames[indexFilename]];
        length += 46 + file.filename.length + file.comment.length;
      }
      data = getDataHelper(length + 22);
      for (indexFilename = 0; indexFilename < filenames.length; indexFilename++) {
        file = files[filenames[indexFilename]];
        data.view.setUint32(index, 0x504b0102);
        data.view.setUint16(index + 4, 0x1400);
        data.array.set(file.headerArray, index + 6);
        data.view.setUint16(index + 32, file.comment.length, true);
        if (file.directory)
          data.view.setUint8(index + 38, 0x10);
        data.view.setUint32(index + 42, file.offset, true);
        data.array.set(file.filename, index + 46);
        data.array.set(file.comment, index + 46 + file.filename.length);
        index += 46 + file.filename.length + file.comment.length;
      }
      data.view.setUint32(index, 0x504b0506);
      data.view.setUint16(index + 8, filenames.length, true);
      data.view.setUint16(index + 10, filenames.length, true);
      data.view.setUint32(index + 12, length, true);
      data.view.setUint32(index + 16, datalength, true);
      writer.writeUint8Array(data.array, function() {
        writer.getData(callback);
      }, onwriteerror);
    },
    _worker: null
  };

  if (!zip.useWebWorkers)
    callback(zipWriter);
  else {
    createWorker('deflater',
      function(worker) {
        zipWriter._worker = worker;
        callback(zipWriter);
      },
      function(err) {
        onerror(err);
      }
    );
  }
}

function resolveURLs(urls) {
  var a = document.createElement('a');
  return urls.map(function(url) {
    a.href = url;
    return a.href;
  });
}

// var DEFAULT_WORKER_SCRIPTS = {
//   deflater: ['z-worker.js', 'deflate.js'],
//   inflater: ['z-worker.js', 'inflate.js']
// };
function createWorker(type, callback, onerror) {

  if (zip.workerScripts !== null && zip.workerScriptsPath !== null) {
    onerror(new Error('Either zip.workerScripts or zip.workerScriptsPath may be set, not both.'));
    return;
  }
  var scripts;

  // var worker = new Worker(blobBuilder(zWorkerCode));

  var worker = new Worker(zWorker);

  // record total consumed time by inflater/deflater/crc32 in this worker
  worker.codecTime = worker.crcTime = 0;
  worker.postMessage({
    type: 'importScripts',
    scripts: ['inflate.js']
  });
  worker.addEventListener('message', onmessage);
  function onmessage(ev) {
    var msg = ev.data;
    if (msg.error) {
      worker.terminate(); // should before onerror(), because onerror() may throw.
      onerror(msg.error);
      return;
    }
    if (msg.type === 'importScripts') {
      worker.removeEventListener('message', onmessage);
      worker.removeEventListener('error', errorHandler);
      callback(worker);
    }
  }

  // catch entry script loading error and other unhandled errors
  worker.addEventListener('error', errorHandler);
  function errorHandler(err) {
    worker.terminate();
    onerror(err);
  }
}

function onerror_default(error) {
  console.error(error);
}

var extendsOpts = {
  Reader: Reader,
  Writer: Writer,
  BlobReader: BlobReader,
  Data64URIReader: Data64URIReader,
  TextReader: TextReader,
  BlobWriter: BlobWriter,
  Data64URIWriter: Data64URIWriter,
  TextWriter: TextWriter,
  createReader: function(reader, callback, onerror) {
    onerror = onerror || onerror_default;

    reader.init(function() {
      createZipReader(reader, callback, onerror);
    }, onerror);
  },
  createWriter: function(writer, callback, onerror, dontDeflate) {
    onerror = onerror || onerror_default;
    dontDeflate = !!dontDeflate;

    writer.init(function() {
      createZipWriter(writer, callback, onerror, dontDeflate);
    }, onerror);
  },
  useWebWorkers: true,
  /**
   * Directory containing the default worker scripts (z-worker.js, deflate.js, and inflate.js), relative to current base url.
   * E.g.: zip.workerScripts = './';
   */
  workerScriptsPath: null,
  /**
   * Advanced option to control which scripts are loaded in the Web worker. If this option is specified, then workerScriptsPath must not be set.
   * workerScripts.deflater/workerScripts.inflater should be arrays of urls to scripts for deflater/inflater, respectively.
   * Scripts in the array are executed in order, and the first one should be z-worker.js, which is used to start the worker.
   * All urls are relative to current base url.
   * E.g.:
   * zip.workerScripts = {
		 *   deflater: ['z-worker.js', 'deflate.js'],
		 *   inflater: ['z-worker.js', 'inflate.js']
		 * };
   */
  workerScripts: null
};

for (var i in extendsOpts) {
  zip[i] = extendsOpts[i];
}

module.exports = zip;


},{"./z-worker":"../node_modules/isomorphic-unzip/lib/browser/z-worker.js"}],"../node_modules/isomorphic-unzip/lib/browser/blob-to-buffer.js":[function(require,module,exports) {

/* global Blob, FileReader */
// Code exacted from https://github.com/feross/blob-to-buffer.
// Because it have not import Buffer module for browser usage.

var Buffer = require('buffer').Buffer;

module.exports = function blobToBuffer(blob, cb) {
  if (typeof Blob === 'undefined' || !(blob instanceof Blob)) {
    throw new Error('first argument must be a Blob')
  }
  if (typeof cb !== 'function') {
    throw new Error('second argument must be a function')
  }

  var reader = new FileReader()

  function onLoadEnd(e) {
    reader.removeEventListener('loadend', onLoadEnd, false);
    if (e.error) cb(e.error);
    else cb(null, new Buffer(reader.result));
  }

  reader.addEventListener('loadend', onLoadEnd, false);
  reader.readAsArrayBuffer(blob);
};

},{"buffer":"../node_modules/buffer/index.js"}],"../node_modules/isomorphic-unzip/lib/utils.js":[function(require,module,exports) {
function toArray(arrayLikeObj) {
  if (!arrayLikeObj) return [];

  return Array.prototype.slice.call(arrayLikeObj);
}

function extend(destObject) {
  var args = toArray(arguments);
  var dest;

  if (args.length == 1) {
    return destObject;
  }

  args.shift();

  // 从前往后遍历
  for (var i = 0, l = args.length; i < l; i++) {
    for (var key in args[i]) {
      if (args[i].hasOwnProperty(key)) {
        destObject[key] = args[i][key];
      }
    }
  }

  return destObject;
}

function isTypeOf(something, type) {
  if (!type) return false;

  type = type.toLowerCase();

  var realTypeString = Object.prototype.toString.call(something);

  return realTypeString.toLowerCase() === '[object ' + type + ']';
}

function isArray(something) {
  return isTypeOf(something, 'array');
}

function isFunction(something) {
  return typeof something === 'function';
}

function isString(something) {
  return typeof something === 'string';
}

function isDefined(something) {
  return !(typeof something === 'undefined');
}

function isObject(something) {
  return typeof something === 'object';
}

function isReg(something) {
  return isTypeOf(something, 'regexp');
}

/**
 *
 * @param {Function/String/RegExp} rule
 * @param {String}                 entryName
 * @return {Boolean}
 */
function isThisWhatYouNeed(rule, entryName) {
  return isFunction(rule) ? rule(entryName) :
    isString(rule) ? entryName.toLowerCase().indexOf(rule.toLowerCase()) > -1 :
      isReg(rule) ? rule.test(entryName.toLowerCase()) :
        false;
}

/**
 *
 * @param str
 * @param prefix
 * @returns {boolean}
 */
function startWith(str, prefix) {
  return str.indexOf(prefix) === 0;
}

function isResouces(attrValue) {
  return startWith(attrValue, 'resourceId:');
}

function transKeyToMatchResourceMap(resourceId) {
  return '@' + resourceId.replace('resourceId:0x', '').toUpperCase();
}

function castLogger(doWhat, fromWhen) {
  console.log(doWhat + ' cost: ' + (Date.now() - fromWhen) + 'ms');
}

module.exports = {
  toArray: toArray,
  extend: extend,
  startWith: startWith,
  isResouces: isResouces,
  transKeyToMatchResourceMap: transKeyToMatchResourceMap,
  castLogger: castLogger,
  isTypeOf: isTypeOf,
  isArray: isArray,
  isFunction: isFunction,
  isString: isString,
  isDefined: isDefined,
  isObject: isObject,
  isReg: isReg,
  isThisWhatYouNeed: isThisWhatYouNeed
};

},{}],"../node_modules/isomorphic-unzip/zip-browser.js":[function(require,module,exports) {
var zip = require('./lib/browser/zip');
var blobToBuffer = require('./lib/browser/blob-to-buffer');
var utils = require('./lib/utils');

function Unzip(file/* or blob */) {
  if (!(file instanceof Blob)) {
    throw new Error('Invalid input, expect the first param to be a File/Blob.');
  }

  if (!(this instanceof Unzip)) return new Unzip(file);

  this.file = file;
}

Unzip.prototype.destroy = function() {
  this.file = null;
};

/**
 *
 * @param {Array<String>} whatYouNeed
 * @param {Object} options       (Optional)
 * @param {String} options.type  Currently, only support 'blob', by default it will return Buffers
 * @param callback Will be called like callback(err, buffers)
 */
Unzip.prototype.getBuffer = function(whatYouNeed, options, callback) {
  if (!utils.isArray(whatYouNeed) || !utils.isFunction(callback)) {
    return callback(new Error('getBuffer: invalid param, expect first param to be an Array and the second param to be a callback function'));
  }

  if (utils.isFunction(options)) {
    callback = options;
    options = {};
  }

  whatYouNeed = whatYouNeed.map(function(rule) {
    if (typeof rule === 'string') {
      rule = rule.split('\u0000').join('');
    }
    return rule;
  });

  this.getEntries(function(error, entries) {
    if (error) return callback(error);

    var matchedEntries = {};

    entries.forEach(function(entry) {
      // Add regexp support
      return whatYouNeed.some(function(entryName) {
        if (utils.isThisWhatYouNeed(entryName, entry.filename)) {
          matchedEntries[entryName] = entry;
          return true;
        }
      });
    });

    iterator(matchedEntries, options, function(error, bufferArray) {
      callback(error, bufferArray);
    });
  });
};

Unzip.prototype.getEntries = function(callback) {
  zip.createReader(new zip.BlobReader(this.file), function(zipReader) {
    zipReader.getEntries(function(entries) {
      callback(null, entries);
    });
  });
};

Unzip.getEntryData = function(entry, callback) {
  var writerType = 'blob';

  var writer = new zip.BlobWriter();

  entry.getData(writer, function(blob) {
    callback(null, blob);
  });
};

function iterator(entries, options, callback) {
  var output = {};
  var serialize = [];
  var index = 0;

  for (var entryName in entries) {
    serialize.push({
      name: entryName,
      entry: entries[entryName]
    });
  }

  if (!serialize.length) {
    callback(null, {});
  }

  serialize.forEach(function(entryInfo) {
    (function(name, entry) {
      Unzip.getEntryData(entry, function(err, blob) {
        if (err) return callback(err);

        if (options.type === 'blob') {
          add(name, blob);
          if (index >= serialize.length) {
            callback(null, output);
          }
        } else {
          blobToBuffer(blob, function(error, buffer) {
            if (error) {
              console.error(error);
              return callback(error);
            }
            add(name, buffer);

            if (index >= serialize.length) {
              callback(null, output);
            }
          });
        }
      });
    })(entryInfo.name, entryInfo.entry);
  });

  function add(name, data) {
    index++;
    output[name] = data;
  }
}

module.exports = Unzip;

},{"./lib/browser/zip":"../node_modules/isomorphic-unzip/lib/browser/zip.js","./lib/browser/blob-to-buffer":"../node_modules/isomorphic-unzip/lib/browser/blob-to-buffer.js","./lib/utils":"../node_modules/isomorphic-unzip/lib/utils.js"}],"js/csvtoarray.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true; // ref: http://stackoverflow.com/a/1293163/2343
// This will parse a delimited string into an array of
// arrays. The default delimiter is the comma, but this
// can be overriden in the second argument.

function CSVToArray(strData, strDelimiter) {
  if (strDelimiter === void 0) {
    strDelimiter = ',';
  } // Create a regular expression to parse the CSV values.


  var objPattern = new RegExp("(\\" + strDelimiter + "|\\r?\\n|\\r|^)(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|([^\"\\" + strDelimiter + "\\r\\n]*))", 'gi'); // Create an array to hold our data. Give the array
  // a default empty first row.

  var arrData = [[]]; // Create an array to hold our individual pattern
  // matching groups.

  var arrMatches = null; // Keep looping over the regular expression matches
  // until we can no longer find a match.

  do {
    arrMatches = objPattern.exec(strData);

    if (!arrMatches) {
      break;
    } // Get the delimiter that was found.


    var strMatchedDelimiter = arrMatches[1]; // Check to see if the given delimiter has a length
    // (is not the start of string) and if it matches
    // field delimiter. If id does not, then we know
    // that this delimiter is a row delimiter.

    if (strMatchedDelimiter.length && strMatchedDelimiter !== strDelimiter) {
      // Since we have reached a new row of data,
      // add an empty row to our data array.
      arrData.push([]);
    }

    var strMatchedValue = void 0; // Now that we have our delimiter out of the way,
    // let's check to see which kind of value we
    // captured (quoted or unquoted).

    if (arrMatches[2]) {
      // We found a quoted value. When we capture
      // this value, unescape any double quotes.
      strMatchedValue = arrMatches[2].replace(new RegExp('""', 'g'), '"');
    } else {
      // We found a non-quoted value.
      strMatchedValue = arrMatches[3];
    } // Now that we have our value string, let's add
    // it to the data array.


    arrData[arrData.length - 1].push(strMatchedValue ? strMatchedValue.trim() : strMatchedValue);
  } while (true); // Return the parsed data.


  return arrData;
}

exports["default"] = CSVToArray;
},{}],"js/main.ts":[function(require,module,exports) {
var global = arguments[3];
var Buffer = require("buffer").Buffer;
"use strict"; //import * as fs from "fs";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var _this = this;

exports.__esModule = true;

var converter_1 = __importDefault(require("./converter"));

var filedrag = document.getElementById('filedrag');
var fileselect = document.getElementById('fileselect');
var fileName = null; // file drag hover

function fileDragHover(e) {
  e.stopPropagation();
  e.preventDefault();
  e.target.className = e.type === 'dragover' ? 'hover' : '';
}

function reset() {
  linkedinToJsonResume = new converter_1["default"]();
  linkedinToJsonResume.target.work = [];
  linkedinToJsonResume.target.languages = [];
  linkedinToJsonResume.target.skills = [];
  linkedinToJsonResume.target.education = [];
  linkedinToJsonResume.target.certifications = [];
  linkedinToJsonResume.target.basics = {};
}

window.onload = reset;

function generateDocx() {
  var fs = require('fs'); //require('buffer');


  var global = global || window;
  global.Buffer = global.Buffer || require('buffer').Buffer;
  var doc = new Document(undefined, {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  });
  var lineBreakParagraph = new Paragraph(" "); //doc.Header.createImage(fs.readFileSync("./src/klanik-header.jpg"), 800, 181);
  //doc.Footer.createImage(fs.readFileSync("./src/klanik-footer.jpg"), 800, 48);

  doc.addParagraph(lineBreakParagraph);
  doc.createImage(Buffer("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", "base64"), 800, 181, {
    floating: {
      horizontalPosition: {
        offset: 0
      },
      verticalPosition: {
        offset: 0
      }
    }
  });
  doc.createImage(Buffer("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", "base64"), 800, 48, {
    floating: {
      horizontalPosition: {
        offset: 0
      },
      verticalPosition: {
        offset: 0
      }
    }
  });
  var secondHeader = doc.createHeader(); //secondHeader.createImage(fs.readFileSync("./src/klanik-second-header.png"), 800, 181);

  secondHeader.createImage(Buffer("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", "base64"), 800, 181);
  doc.addSection({
    headers: {
      "default": secondHeader
    },
    pageNumberStart: 0
  });
  doc.addParagraph(lineBreakParagraph);
  doc.Styles.createParagraphStyle("arialParag", "arialParag").font("Arial").spacing({
    line: 276
  });
  var lineCount = 0;
  if (linkedinToJsonResume.target.skills.length % 2 == 0) lineCount = linkedinToJsonResume.target.skills.length / 2;else lineCount = linkedinToJsonResume.target.skills.length / 2 + 1;
  var colSizes = [];
  colSizes.push(10000);
  colSizes.push(10000);
  colSizes.push(10000);
  colSizes.push(10000);
  var table = new Table(lineCount, 4, colSizes);
  doc.addTable(table); //table.Properties.setWidth(800, WidthType.AUTO);

  for (var i = 0; i < linkedinToJsonResume.target.skills.length; i += 2) {
    table.getCell(i / 2, 0).addContent(new Paragraph("   " + linkedinToJsonResume.target.skills[i]['name'] + "   ").style("arialParag"));
    var levelTxt = '';

    for (var j = 1; j <= linkedinToJsonResume.target.skills[i]['level']; j++) {
      levelTxt += '*';
    }

    table.getCell(i / 2, 1).addContent(new Paragraph("   " + levelTxt + "   ").style("arialParag"));

    if (linkedinToJsonResume.target.skills[i + 1]) {
      table.getCell(i / 2, 2).addContent(new Paragraph("   " + linkedinToJsonResume.target.skills[i + 1]['name'] + "   ").style("arialParag"));
      var levelTxt = '';

      for (var j = 1; j <= linkedinToJsonResume.target.skills[i + 1]['level']; j++) {
        levelTxt += '*';
      }

      table.getCell(i / 2, 3).addContent(new Paragraph("   " + levelTxt + "   ").style("arialParag"));
    }
  }

  doc.addParagraph(lineBreakParagraph);
  var lineLangCount = linkedinToJsonResume.target.languages.length;
  var langTable = new Table(lineLangCount, 2, colSizes);
  doc.addTable(langTable); //langTable.Properties.setWidth(800, WidthType.AUTO);

  for (var i = 0; i < lineLangCount; i++) {
    langTable.getCell(i, 0).addContent(new Paragraph("   " + linkedinToJsonResume.target.languages[i]['language'] + "   ").style("arialParag"));
    langTable.getCell(i, 1).addContent(new Paragraph("   " + linkedinToJsonResume.target.languages[i]['fluency'] + "   ").style("arialParag"));
  }

  doc.addParagraph(lineBreakParagraph);
  doc.createImage(Buffer("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", "base64"), 800, 48);
  doc.addParagraph(lineBreakParagraph);

  for (var i = 0; i < linkedinToJsonResume.target.education.length; i++) {
    var educParag = new Paragraph();
    var text = linkedinToJsonResume.target.education[i]['date'] + ": " + linkedinToJsonResume.target.education[i]['studyType'] + ": " + linkedinToJsonResume.target.education[i]['institution'];
    educParag.addRun(new TextRun(text).font("Arial"));
    doc.addParagraph(educParag);
  }

  doc.addParagraph(lineBreakParagraph);
  doc.createImage(Buffer("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", "base64"), 800, 48);
  doc.addParagraph(lineBreakParagraph);

  for (var i = 0; i < linkedinToJsonResume.target.certifications.length; i++) {
    var certifParag = new Paragraph();
    var text = linkedinToJsonResume.target.certifications[i]['date'] + ": " + linkedinToJsonResume.target.certifications[i]['name'];
    certifParag.addRun(new TextRun(text).font("Arial"));
    doc.addParagraph(certifParag);
  }

  doc.addParagraph(lineBreakParagraph);
  doc.createImage(Buffer("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", "base64"), 800, 48);
  doc.addParagraph(lineBreakParagraph);
  var workTable = new Table(linkedinToJsonResume.target.work.length, 3, [10000, 10000, 10000]);
  doc.addTable(workTable);

  for (var i = 0; i < linkedinToJsonResume.target.work.length; i++) {
    workTable.getCell(i, 0).addContent(new Paragraph("   " + linkedinToJsonResume.target.work[i]['date'] + "   ").style("arialParag"));
    workTable.getCell(i, 1).addContent(new Paragraph("   " + linkedinToJsonResume.target.work[i]['company'] + "   ").style("arialParag"));
    workTable.getCell(i, 2).addContent(new Paragraph("   " + linkedinToJsonResume.target.work[i]['position'] + "   ").style("arialParag"));
  }

  doc.addParagraph(lineBreakParagraph);
  doc.createImage(Buffer("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", "base64"), 800, 48);

  for (var i = 0; i < linkedinToJsonResume.target.work.length; i++) {
    if (linkedinToJsonResume.target.work[i]['projects'] != null && linkedinToJsonResume.target.work[i]['projects'].length > 0) {
      doc.addParagraph(lineBreakParagraph);
      var projectParagraph = new Paragraph();
      var text = linkedinToJsonResume.target.work[i]['date'] + " : " + linkedinToJsonResume.target.work[i]['position'] + " at " + linkedinToJsonResume.target.work[i]['company'];
      projectParagraph.addRun(new TextRun(text).bold().font("Arial"));
      doc.addParagraph(projectParagraph);
      doc.addParagraph(lineBreakParagraph);
      var headerParagraph = new Paragraph();
      headerParagraph.addRun(new TextRun("Projects : ").font("Arial"));
      doc.addParagraph(headerParagraph);

      for (var projIndex = 0; projIndex < linkedinToJsonResume.target.work[i]['projects'].length; projIndex++) {
        var bulletParagraph = new Paragraph();
        var bulletText = linkedinToJsonResume.target.work[i]['projects'][projIndex];
        bulletParagraph.addRun(new TextRun(bulletText).font("Arial"));
        doc.addParagraph(bulletParagraph.bullet());
      }

      doc.addParagraph(lineBreakParagraph);
      var header2Paragraph = new Paragraph();
      header2Paragraph.addRun(new TextRun("Accomplishments : ").font("Arial"));
      doc.addParagraph(header2Paragraph);

      for (var proj2Index = 0; proj2Index < linkedinToJsonResume.target.work[i]['accomplishments'].length; proj2Index++) {
        var bullet2Paragraph = new Paragraph();
        var bullet2Text = linkedinToJsonResume.target.work[i]['accomplishments'][proj2Index];
        bullet2Paragraph.addRun(new TextRun(bullet2Text).font("Arial"));
        doc.addParagraph(bullet2Paragraph.bullet());
      }

      doc.addParagraph(lineBreakParagraph);
      var header3Paragraph = new Paragraph();
      header3Paragraph.addRun(new TextRun("Technologies : ").font("Arial"));
      doc.addParagraph(header3Paragraph);

      for (var proj3Index = 0; proj3Index < linkedinToJsonResume.target.work[i]['technologies'].length; proj3Index++) {
        var bullet3Paragraph = new Paragraph();
        var bullet3Text = linkedinToJsonResume.target.work[i]['technologies'][proj3Index];
        bullet3Paragraph.addRun(new TextRun(bullet3Text).font("Arial"));
        doc.addParagraph(bullet3Paragraph.bullet());
      }
    }
  }

  var packer = new Packer();
  var documentName = linkedinToJsonResume.target.basics.firstName + ' ' + linkedinToJsonResume.target.basics.lastName + '.docx';
  packer.toBlob(doc).then(function (blob) {
    saveAs(blob, documentName);
  });
}

function recompile() {
  linkedinToJsonResume.target.work = [];
  linkedinToJsonResume.target.languages = [];
  linkedinToJsonResume.target.skills = [];
  linkedinToJsonResume.target.education = [];
  linkedinToJsonResume.target.certifications = [];
  linkedinToJsonResume.target.basics = {}; // GET BASICS

  var firstName = document.getElementById("input-firstname").value;
  var lastName = document.getElementById("input-lastname").value;
  var label = document.getElementById("input-label").value;
  var email = document.getElementById("input-email").value;
  var phone = document.getElementById("input-phone").value;
  linkedinToJsonResume.target.basics = {
    "firstName": firstName,
    "lastName": lastName,
    "label": label,
    "email": email,
    "phone": phone
  }; // GET LANGUAGES

  var langRows = document.getElementsByClassName("language-row");

  for (var i = 0; i < langRows.length; i++) {
    if (langRows[i].style.display != 'none') {
      var language = langRows[i].getElementsByClassName("language-input")[0].value;
      var languageFluency = langRows[i].getElementsByClassName("language-fluency-input")[0].value;
      linkedinToJsonResume.target.languages.push({
        "language": language,
        "fluency": languageFluency
      });
    }
  } // GET POSITIONS


  var workRows = document.getElementsByClassName("work-row");

  for (var i = 0; i < workRows.length; i++) {
    if (workRows[i].style.display != 'none') {
      var date = workRows[i].getElementsByClassName("work-date-input")[0].value;
      var company = workRows[i].getElementsByClassName("work-company-input")[0].value;
      var position = workRows[i].getElementsByClassName("work-position-input")[0].value;
      var summary = workRows[i].getElementsByClassName("work-summary-input")[0].value;
      linkedinToJsonResume.target.work.push({
        "date": date,
        "company": company,
        "position": position,
        "summary": summary,
        "projects": [],
        "accomplishments": [],
        "technologies": []
      });
    }
  }

  var projectsRows = document.getElementsByClassName("project-sub-row");

  for (var i = 0; i < projectsRows.length; i++) {
    //console.log("SUB ROW");
    //console.log(projectsRows[i].getElementsByClassName("project-project-cell"));
    var projectIndex = projectsRows[i].id; //console.log(projectsRows[i].getElementsByClassName("project-project-cell")[0].innerText || projectsRows[i].getElementsByClassName("project-project-cell")[0].textContent);

    var projectValue = projectsRows[i].getElementsByClassName("project-project-cell")[0].innerText || projectsRows[i].getElementsByClassName("project-project-cell")[0].textContent;
    var accomplishmentsValue = projectsRows[i].getElementsByClassName("project-accomplishment-cell")[0].innerText || projectsRows[i].getElementsByClassName("project-accomplishment-cell")[0].textContent;
    var technoValue = projectsRows[i].getElementsByClassName("project-technologie-cell")[0].innerText || projectsRows[i].getElementsByClassName("project-technologie-cell")[0].textContent; //console.log(projectValue);
    //console.log(accomplishmentsValue);
    //console.log(technoValue);

    linkedinToJsonResume.target.work[projectIndex]['projects'].push(projectValue);
    linkedinToJsonResume.target.work[projectIndex]['accomplishments'].push(accomplishmentsValue);
    linkedinToJsonResume.target.work[projectIndex]['technologies'].push(technoValue);
  } // GET SKILLS


  var skillRows = document.getElementsByClassName("skill-row");

  for (var i = 0; i < skillRows.length; i++) {
    if (skillRows[i].style.display != 'none') {
      var skill = skillRows[i].getElementsByClassName("skill-input")[0].value;
      var skillLevel = skillRows[i].getElementsByClassName("skill-level-select")[0].value;
      linkedinToJsonResume.target.skills.push({
        "name": skill,
        "level": skillLevel
      });
    }
  } // GET EDUCATION


  var educationRows = document.getElementsByClassName("education-row");

  for (var i = 0; i < educationRows.length; i++) {
    if (educationRows[i].style.display != 'none') {
      var date = educationRows[i].getElementsByClassName("education-date-input")[0].value;
      var institution = educationRows[i].getElementsByClassName("education-school-input")[0].value;
      var studyType = educationRows[i].getElementsByClassName("education-type-input")[0].value;
      linkedinToJsonResume.target.education.push({
        "date": date,
        "institution": institution,
        "studyType": studyType
      });
    }
  } // GET CERTIFICATIONS


  var certifRows = document.getElementsByClassName("certif-row");

  for (var i = 0; i < certifRows.length; i++) {
    if (certifRows[i].style.display != 'none') {
      var date = certifRows[i].getElementsByClassName("certif-date-input")[0].value;
      var name = certifRows[i].getElementsByClassName("certif-name-input")[0].value;
      linkedinToJsonResume.target.certifications.push({
        "name": name,
        "date": date
      });
    }
  } // REBUILD UI


  var langTable = document.getElementById("languages-table");

  while (langTable.hasChildNodes()) {
    langTable.removeChild(langTable.firstChild);
  }

  var skillsTable = document.getElementById("skills-table");

  while (skillsTable.hasChildNodes()) {
    skillsTable.removeChild(skillsTable.firstChild);
  }

  var workTable = document.getElementById("work-table");

  while (workTable.hasChildNodes()) {
    workTable.removeChild(workTable.firstChild);
  }

  var educationTable = document.getElementById("education-table");

  while (educationTable.hasChildNodes()) {
    educationTable.removeChild(educationTable.firstChild);
  }

  var certifsTable = document.getElementById("certifs-table");

  while (certifsTable.hasChildNodes()) {
    certifsTable.removeChild(certifsTable.firstChild);
  }

  linkedinToJsonResume.getWorkExperienceTable(this);
  linkedinToJsonResume.getLanguages();
  linkedinToJsonResume.getSkills();
  linkedinToJsonResume.getEducation();
  linkedinToJsonResume.getCertifications();
  document.getElementById('input-firstname').value = linkedinToJsonResume.target['basics']['firstName'];
  document.getElementById('input-lastname').value = linkedinToJsonResume.target['basics']['lastName'];
  document.getElementById('input-label').value = linkedinToJsonResume.target['basics']['label'];
  document.getElementById('input-email').value = linkedinToJsonResume.target['basics']['email'];
  document.getElementById('input-phone').value = linkedinToJsonResume.target['basics']['phone']; //console.log(linkedinToJsonResume.target);
}

var linkedinToJsonResume;
var compileButton = document.querySelector('.docx');
compileButton.addEventListener('click', function () {
  recompile();
  generateDocx();
});
var addLanguageButton = document.querySelector('.add-language');
addLanguageButton.addEventListener('click', function () {
  recompile();
  var langTable = document.getElementById("languages-table");

  while (langTable.hasChildNodes()) {
    langTable.removeChild(langTable.firstChild);
  }

  linkedinToJsonResume.target.languages.push({
    "language": "",
    "fluency": ""
  });
  linkedinToJsonResume.getLanguages();
});
var addWorkButton = document.querySelector('.add-work');
addWorkButton.addEventListener('click', function () {
  recompile();
  var workTable = document.getElementById("work-table");

  while (workTable.hasChildNodes()) {
    workTable.removeChild(workTable.firstChild);
  }

  linkedinToJsonResume.target.work.push({
    "date": "",
    "company": "",
    "position": "",
    "summary": ""
  });
  linkedinToJsonResume.getWorkExperienceTable(_this);
});
var addSkillButton = document.querySelector('.add-skill');
addSkillButton.addEventListener('click', function () {
  recompile();
  var skillTable = document.getElementById("skills-table");

  while (skillTable.hasChildNodes()) {
    skillTable.removeChild(skillTable.firstChild);
  }

  linkedinToJsonResume.target.skills.push({
    "name": ""
  });
  linkedinToJsonResume.getSkills();
});
var addEducationButton = document.querySelector('.add-education');
addEducationButton.addEventListener('click', function () {
  recompile();
  var educationTable = document.getElementById("education-table");

  while (educationTable.hasChildNodes()) {
    educationTable.removeChild(educationTable.firstChild);
  }

  linkedinToJsonResume.target.education.push({
    "date": "",
    "institution": "",
    "studyType": ""
  });
  linkedinToJsonResume.getEducation();
});
var addCertifButton = document.querySelector('.add-certif');
addCertifButton.addEventListener('click', function () {
  recompile();
  var certifsTable = document.getElementById("certifs-table");

  while (certifsTable.hasChildNodes()) {
    certifsTable.removeChild(certifsTable.firstChild);
  }

  linkedinToJsonResume.target.certifications.push({
    "date": "",
    "name": ""
  });
  linkedinToJsonResume.getCertifications();
});
var downloadButton = document.querySelector('.download');
downloadButton.addEventListener('click', function () {
  Promise.resolve().then(function () {
    return __importStar(require('./file'));
  }).then(function (save) {
    save["default"](JSON.stringify(linkedinToJsonResume.getOutput(), undefined, 2), 'resume.json');

    if (window.ga) {
      window.ga('send', 'event', 'linkedin-to-json-resume', 'download-resume');
    }
  });
});
downloadButton.style.display = 'none'; // file selection

function fileSelectHandler(e) {
  var _this = this;

  if (window.ga) {
    window.ga('send', 'event', 'linkedin-to-json-resume', 'file-selected');
  }

  Promise.all([Promise.resolve().then(function () {
    return __importStar(require('./converter'));
  }), Promise.resolve().then(function () {
    return __importStar(require('moment'));
  }), Promise.resolve().then(function () {
    return __importStar(require('isomorphic-unzip/zip-browser'));
  }), Promise.resolve().then(function () {
    return __importStar(require('./csvtoarray'));
  })]).then(function (modules) {
    var LinkedInToJsonResume = modules[0],
        Moment = modules[1],
        Unzip = modules[2],
        CsvToArray = modules[3];
    var csvToArray = CsvToArray["default"];
    var moment = Moment["default"]; //linkedinToJsonResume = new LinkedInToJsonResume.default();
    // cancel event and hover styling

    fileDragHover(e);
    var droppedFiles = e.target.files || e.dataTransfer.files;
    var file = droppedFiles[0];
    fileName = file.name;

    var readBlob = function readBlob(blob) {
      return new Promise(function (resolve) {
        var reader = new FileReader();

        reader.onload = function (e) {
          resolve(e.target.result);
        };

        reader.readAsText(blob);
      });
    };

    var readEntryContents = function readEntryContents(entry) {
      return new Promise(function (resolve) {
        Unzip["default"].getEntryData(entry, function (error, blob) {
          readBlob(blob).then(resolve);
        });
      });
    };

    var unzip = null;

    var getEntries = function getEntries(file, onend) {
      unzip = new Unzip["default"](file);
      unzip.getEntries(function (error, entries) {
        onend(entries);
      });
    };

    getEntries(file, function (entries) {
      var promises = entries.map(function (entry) {
        switch (true) {
          case entry.filename.indexOf('Skills.csv') !== -1:
            return readEntryContents(entry).then(function (contents) {
              contents = contents.replace(/"/g, '');
              var elements = contents.split('\n');
              elements = elements.slice(1, elements.length - 1);
              linkedinToJsonResume.processSkills(elements);
              return;
            });

          case entry.filename.indexOf('Education.csv') !== -1:
            return readEntryContents(entry).then(function (contents) {
              var elements = csvToArray(contents);
              var education = elements.slice(1, elements.length - 1).map(function (elem) {
                return {
                  institution: elem[0],
                  startDate: moment(elem[1]).format('YYYY-MM'),
                  endDate: moment(elem[2]).format('YYYY-MM'),
                  notes: elem[3],
                  degree: elem[4],
                  activities: elem[5]
                };
              });
              linkedinToJsonResume.processEducation(education.sort(function (e1, e2) {
                return -e1.startDate.localeCompare(e2.startDate);
              }));
              return;
            });

          case entry.filename.indexOf('Certifications.csv') !== -1:
            return readEntryContents(entry).then(function (contents) {
              var elements = csvToArray(contents);
              var certification = elements.slice(1, elements.length - 1).map(function (elem) {
                return {
                  name: elem[0],
                  startDate: moment(elem[3], 'MMM YYYY').format('YYYY'),
                  endDate: elem[4] ? moment(elem[4], 'MMM YYYY').format('YYYY') : null
                };
              });
              linkedinToJsonResume.processCertification(certification.sort(function (e1, e2) {
                return -e1.startDate.localeCompare(e2.startDate);
              }));
              return;
            });

          case entry.filename.indexOf('Positions.csv') !== -1:
            return readEntryContents(entry).then(function (contents) {
              var elements = csvToArray(contents);
              var positions = elements.slice(1, elements.length - 1).map(function (elem) {
                return {
                  companyName: elem[0],
                  title: elem[1],
                  description: elem[2],
                  location: elem[3],
                  startDate: moment(elem[4], 'MMM YYYY').format('YYYY-MM'),
                  endDate: elem[5] ? moment(elem[5], 'MMM YYYY').format('YYYY-MM') : null
                };
              });
              linkedinToJsonResume.processPosition(positions.sort(function (p1, p2) {
                return -p1.startDate.localeCompare(p2.startDate);
              }));
              return;
            });

          case entry.filename.indexOf('Languages.csv') !== -1:
            return readEntryContents(entry).then(function (contents) {
              var elements = csvToArray(contents);
              var languages = elements.slice(1, elements.length - 1).map(function (elem) {
                return {
                  name: elem[0],
                  proficiency: elem[1]
                };
              });
              linkedinToJsonResume.processLanguages(languages);
              return;
            });

          case entry.filename.indexOf('Recommendations Received.csv') !== -1:
            return readEntryContents(entry).then(function (contents) {
              var elements = csvToArray(contents);
              var recommendations = elements.slice(1, elements.length - 1).map(function (elem) {
                return {
                  recommenderFirstName: elem[0],
                  recommenderLastName: elem[1],
                  recommenderCompany: elem[2],
                  recommenderTitle: elem[3],
                  recommendationBody: elem[4],
                  recommendationDate: elem[5],
                  displayStatus: elem[6]
                };
              }).filter(function (recommendation) {
                return recommendation.displayStatus === 'VISIBLE';
              });
              linkedinToJsonResume.processReferences(recommendations);
              return;
            });

          case entry.filename.indexOf('Profile.csv') !== -1:
            return readEntryContents(entry).then(function (contents) {
              var elements = csvToArray(contents);
              var profile = {
                firstName: elements[1][0],
                lastName: elements[1][1],
                maidenName: elements[1][2],
                address: elements[1][3],
                birthDate: elements[1][4],
                contactInstructions: elements[1][5],
                headline: elements[1][6],
                summary: elements[1][7],
                industry: elements[1][8],
                country: elements[1][9],
                zipCode: elements[1][10],
                geoLocation: elements[1][11],
                twitterHandles: elements[1][12],
                websites: elements[1][13],
                instantMessengers: elements[1][14]
              };
              linkedinToJsonResume.processProfile(profile);
              return;
            });

          case entry.filename.indexOf('Email Addresses.csv') !== -1:
            return readEntryContents(entry).then(function (contents) {
              var elements = csvToArray(contents, '\t'); // yes, recommendations use tab-delimiter

              var email = elements.slice(1, elements.length - 1).map(function (elem) {
                return {
                  address: elem[0],
                  status: elem[1],
                  isPrimary: elem[2] === 'Yes',
                  dateAdded: elem[3],
                  dateRemoved: elem[4]
                };
              }).filter(function (email) {
                return email.isPrimary;
              });

              if (email.length) {
                linkedinToJsonResume.processEmail(email[0]);
              }

              return;
            });

          case entry.filename.indexOf('Interests.csv') !== -1:
            return readEntryContents(entry).then(function (contents) {
              var elements = csvToArray(contents);
              var interests = [];
              elements.slice(1, elements.length - 1).forEach(function (elem) {
                interests = interests.concat(elem[0].split(','));
              });
              linkedinToJsonResume.processInterests(interests);
              return;
            });

          case entry.filename.indexOf('Projects.csv') !== -1:
            return readEntryContents(entry).then(function (contents) {
              var elements = csvToArray(contents);
              var projects = elements.slice(1, elements.length - 1).map(function (elem) {
                return {
                  title: elem[0],
                  description: elem[1],
                  url: elem[2],
                  startDate: moment(elem[3]).format('YYYY-MM-DD'),
                  endDate: elem[4] ? moment(elem[4]).format('YYYY-MM-DD') : null
                };
              });
              linkedinToJsonResume.processProjects(projects.sort(function (p1, p2) {
                return -p1.startDate.localeCompare(p2.startDate);
              }));
              return;
            });

          case entry.filename.indexOf('Publications.csv') !== -1:
            return readEntryContents(entry).then(function (contents) {
              var elements = csvToArray(contents);
              var publications = elements.slice(1, elements.length - 1).map(function (elem) {
                return {
                  name: elem[0],
                  date: moment(elem[1]).format('YYYY-MM-DD'),
                  description: elem[2],
                  publisher: elem[3],
                  url: elem[4]
                };
              });
              linkedinToJsonResume.processPublications(publications.sort(function (p1, p2) {
                return -p1.date.localeCompare(p2.date);
              }));
              return;
            });

          default:
            return Promise.resolve([]);
        }
      });
      Promise.all(promises).then(function () {
        if (window.ga) {
          window.ga('send', 'event', 'linkedin-to-json-resume', 'file-parsed-success');
        }

        filedrag.innerHTML = 'Dropped! See the resulting JSON Resume at the bottom.';
        var output = document.getElementById('output');
        output.innerHTML = JSON.stringify(linkedinToJsonResume.getOutput(), undefined, 2);
        document.getElementById('input-firstname').value = linkedinToJsonResume.target['basics']['firstName'];
        document.getElementById('input-lastname').value = linkedinToJsonResume.target['basics']['lastName'];
        document.getElementById('input-label').value = linkedinToJsonResume.target['basics']['label'];
        document.getElementById('input-email').value = linkedinToJsonResume.target['basics']['email'];
        document.getElementById('input-phone').value = linkedinToJsonResume.target['basics']['phone'];
        linkedinToJsonResume.getWorkExperienceTable(_this);
        linkedinToJsonResume.getLanguages();
        linkedinToJsonResume.getSkills();
        linkedinToJsonResume.getEducation();
        linkedinToJsonResume.getCertifications();
        window.Prism.highlightElement(output);
        downloadButton.style.display = 'block';
        document.getElementById('result').style.display = 'block';
      });
    });
  });
} // file select


fileselect.addEventListener('change', fileSelectHandler, false);
var xhr = new XMLHttpRequest();

if (xhr.upload) {
  // file drop
  filedrag.addEventListener('dragover', fileDragHover, false);
  filedrag.addEventListener('dragleave', fileDragHover, false);
  filedrag.addEventListener('drop', fileSelectHandler, false);
  filedrag.style.display = 'block';
} else {
  filedrag.style.display = 'none';
}

document.getElementById('select-file').addEventListener('click', function () {
  fileselect.click();
});
},{"./converter":"js/converter.ts","fs":"../node_modules/parcel-bundler/src/builtins/_empty.js","buffer":"../node_modules/buffer/index.js","./file":"js/file.ts","moment":"../node_modules/moment/moment.js","isomorphic-unzip/zip-browser":"../node_modules/isomorphic-unzip/zip-browser.js","./csvtoarray":"js/csvtoarray.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56943" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.ts"], null)
//# sourceMappingURL=/main.7ebd0bc5.map