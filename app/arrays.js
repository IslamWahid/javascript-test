if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function() {
  return {
    indexOf: function(arr, item) {
      return arr.indexOf(item);
    },

    sum: function(arr) {
      return arr.reduce(function(sum, val) {
        return sum + val;
      }, 0);
    },

    remove: function(arr, item) {
      return arr.filter(function(val) {
        return val !== item;
      });
    },

    removeWithoutCopy: function(arr, item) {
      var i = arr.findIndex(function(val) {
        return val === item;
      });
      if (i !== -1) {
        arr.splice(i, 1);
        this.removeWithoutCopy(arr, item);
      }
      return arr;
    },

    append: function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate: function(arr) {
      arr.pop();
      return arr;
    },

    prepend: function(arr, item) {
      return [item].concat(arr);
    },

    curtail: function(arr) {
      return arr.slice(1);
    },

    concat: function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert: function(arr, item, index) {
      var arr1 = arr.slice(0, index);
      var arr2 = arr.slice(index);
      arr1.push(item);
      return arr1.concat(arr2);
    },

    count: function(arr, item) {
      return arr.reduce(function(count, val) {
        if (val === item) count++;
        return count;
      }, 0);
    },

    duplicates: function(arr) {
      var self = this;
      var set = new Set(arr);
      var result = [];
      set.forEach(function(val, i) {
        if (self.count(arr, val) > 1) result.push(val);
      });
      return result;
    },

    square: function(arr) {
      return arr.map(function(val) {
        return Math.pow(val, 2);
      });
    },

    findAllOccurrences: function(arr, target) {
      var result = [];
      arr.forEach(function(val, i) {
        if (val === target) result.push(i);
      });
      return result;
    }
  };
});
