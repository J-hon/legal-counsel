"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_AddClient_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/AddClient.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/AddClient.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'add-client',
  data: function data() {
    return {
      client: {
        first_name: '',
        last_name: '',
        email: '',
        primary_legal_counsel: '',
        date_of_birth: '',
        profile_picture: null,
        case_details: ''
      }
    };
  },
  methods: {
    onSubmit: function onSubmit(event) {
      var _this = this;
      event.preventDefault();
      this.axios.post("/api/v1/client", this.client).then(function (response) {
        _this.$router.push({
          name: 'home'
        });
      })["catch"](function (err) {
        console.log(err.response);
      });
    },
    makeToast: function makeToast(title, content, variant) {
      this.$bvToast.toast(content, {
        title: title,
        variant: variant,
        solid: true
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/AddClient.vue?vue&type=template&id=760ff673&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/AddClient.vue?vue&type=template&id=760ff673& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b-container", {
    staticClass: "bv-example-row mt-5"
  }, [_c("router-link", {
    staticClass: "btn btn-info text-white",
    attrs: {
      to: "/"
    }
  }, [_vm._v("All Clients")]), _vm._v(" "), _c("b-form", {
    staticClass: "mt-5",
    on: {
      submit: _vm.onSubmit
    }
  }, [_c("b-row", [_c("b-col", [_c("b-form-group", {
    attrs: {
      label: "First Name:"
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "text",
      placeholder: "Enter First Name",
      required: ""
    },
    model: {
      value: _vm.client.first_name,
      callback: function callback($$v) {
        _vm.$set(_vm.client, "first_name", $$v);
      },
      expression: "client.first_name"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", [_c("b-form-group", {
    attrs: {
      label: "Last Name:"
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "text",
      placeholder: "Enter Last name",
      required: ""
    },
    model: {
      value: _vm.client.last_name,
      callback: function callback($$v) {
        _vm.$set(_vm.client, "last_name", $$v);
      },
      expression: "client.last_name"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("b-row", {
    staticClass: "mt-3"
  }, [_c("b-form-group", {
    attrs: {
      label: "E-mail Address:"
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "email",
      placeholder: "Enter email",
      required: ""
    },
    model: {
      value: _vm.client.email,
      callback: function callback($$v) {
        _vm.$set(_vm.client, "email", $$v);
      },
      expression: "client.email"
    }
  })], 1)], 1), _vm._v(" "), _c("b-row", {
    staticClass: "mt-3"
  }, [_c("b-form-group", {
    attrs: {
      label: "Primary Legal Counsel:"
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "text",
      placeholder: "Enter Primary Legal Counsel",
      required: ""
    },
    model: {
      value: _vm.client.primary_legal_counsel,
      callback: function callback($$v) {
        _vm.$set(_vm.client, "primary_legal_counsel", $$v);
      },
      expression: "client.primary_legal_counsel"
    }
  })], 1)], 1), _vm._v(" "), _c("b-row", {
    staticClass: "mt-3"
  }, [_c("b-col", [_c("b-form-group", {
    attrs: {
      label: "Date of Birth:"
    }
  }, [_c("b-form-datepicker", {
    staticClass: "mb-2",
    attrs: {
      placeholder: "Choose a date"
    },
    model: {
      value: _vm.client.date_of_birth,
      callback: function callback($$v) {
        _vm.$set(_vm.client, "date_of_birth", $$v);
      },
      expression: "client.date_of_birth"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", [_c("b-form-group", {
    attrs: {
      label: "Profile Image:"
    }
  }, [_c("b-form-file", {
    attrs: {
      state: Boolean(_vm.client.profile_picture),
      placeholder: "Select profile picture"
    },
    model: {
      value: _vm.client.profile_picture,
      callback: function callback($$v) {
        _vm.$set(_vm.client, "profile_picture", $$v);
      },
      expression: "client.profile_picture"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("b-row", {
    staticClass: "mt-3"
  }, [_c("b-form-group", {
    attrs: {
      label: "Case Details:"
    }
  }, [_c("b-form-textarea", {
    attrs: {
      id: "textarea",
      placeholder: "Enter case details...",
      rows: "7"
    },
    model: {
      value: _vm.client.case_details,
      callback: function callback($$v) {
        _vm.$set(_vm.client, "case_details", $$v);
      },
      expression: "client.case_details"
    }
  })], 1)], 1), _vm._v(" "), _c("b-button", {
    staticClass: "mt-3 text-white",
    attrs: {
      type: "submit",
      variant: "info"
    }
  }, [_vm._v("Create Profile")])], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/Pages/AddClient.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/AddClient.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddClient_vue_vue_type_template_id_760ff673___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddClient.vue?vue&type=template&id=760ff673& */ "./resources/js/Pages/AddClient.vue?vue&type=template&id=760ff673&");
/* harmony import */ var _AddClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddClient.vue?vue&type=script&lang=js& */ "./resources/js/Pages/AddClient.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddClient_vue_vue_type_template_id_760ff673___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddClient_vue_vue_type_template_id_760ff673___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/AddClient.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/AddClient.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/AddClient.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddClient.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/AddClient.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/AddClient.vue?vue&type=template&id=760ff673&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/AddClient.vue?vue&type=template&id=760ff673& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddClient_vue_vue_type_template_id_760ff673___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddClient_vue_vue_type_template_id_760ff673___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddClient_vue_vue_type_template_id_760ff673___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddClient.vue?vue&type=template&id=760ff673& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/AddClient.vue?vue&type=template&id=760ff673&");


/***/ })

}]);