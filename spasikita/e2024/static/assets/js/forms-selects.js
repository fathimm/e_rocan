/**
 * Selects & Tags
 */

'use strict';

$(function () {
  const selectPicker = $('.selectpicker'),
    select2 = $('.select2a,.select2b,.select2c,.select2d,.select2e,.select2f,.select2g,.select2h,.select2i,.select2j,.select2k,.select2l,.select2m,.select2n,.select2o,.select2p,.select2q,.select2r,.select2s,.select2t,.select2u,.select2v,.select2w,.select2x,.select2y,.select2z'),
    select2uu = $('.select2uu'),
    select2sr = $('.select2sr'),
    select2Icons = $('.select2-icons');

  // Bootstrap Select
  // --------------------------------------------------------------------
  if (selectPicker.length) {
    selectPicker.selectpicker();
  }

  // Select2
  // --------------------------------------------------------------------

  // Default
  if (select2.length) {
    select2.each(function () {
      var $this = $(this);
      $this.wrap('<div class="position-relative"></div>').select2({
        placeholder: 'Pilih...',
        dropdownParent: $this.parent()
      });
    });
  }

  if (select2uu.length) {
    select2uu.each(function () {
      var $this = $(this);
      $this.wrap('<div class="position-relative"></div>').select2({
        placeholder: 'Unit Utama'
      });
    });
  }

  if (select2sr.length) {
    select2sr.each(function () {
      var $this = $(this);
      $this.wrap('<div class="position-relative"></div>').select2({
        placeholder: 'Satuan Kerja'
      });
    });
  }

  // Select2 Icons
  if (select2Icons.length) {
    // custom template to render icons
    function renderIcons(option) {
      if (!option.id) {
        return option.text;
      }
      var $icon = "<i class='bx bxl-" + $(option.element).data('icon') + " me-2'></i>" + option.text;

      return $icon;
    }
    select2Icons.wrap('<div class="position-relative"></div>').select2({
      templateResult: renderIcons,
      templateSelection: renderIcons,
      escapeMarkup: function (es) {
        return es;
      }
    });
  }
});
