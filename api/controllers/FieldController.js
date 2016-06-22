/**
 * FieldController
 *
 * @description :: Server-side logic for managing fields
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `FieldController.index()`
   */
  index: function (req, res) {
   Field.find(function (err,index){
      if (err) return res.send(err,500);
        res.json({FieldIndex:index});
    });
  },


  /**
   * `FieldController.new()`
   */
  new: function (req, res) {
    return res.json({
      todo: 'new() is not implemented yet!'
    });
  },


  /**
   * `FieldController.show()`
   */
  show: function (req, res) {
    var id = req.param('id');
   Field.findOne(id,function(err,show){
    if (err) return res.send(err,500);
      res.json({FieldShow:show});
   });
  },


  /**
   * `FieldController.create()`
   */
  create: function (req, res) {
    var values=req.params.all();
    Field.create(values,function(err,create){
      if (err) return res.send(err,500);
      res.json({FieldCreate:create});
    });
  },


  /**
   * `FieldController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },


  /**
   * `FieldController.update()`
   */
  update: function (req, res) {
    var values = req.params.all();
    var id = req.param('id');
    Field.update(id,values,function(err,update){
    if (err) return res.send(err,500);
    res.json({FieldUpdate:update});
   });
  },


  /**
   * `FieldController.destroy()`
   */
  destroy: function (req, res) {
     var id = req.param('id');
      Field.find(id, function(err, entity) {
      if (err) return res.send(err, 500);
      if (!entity) return res.send("No user with that idid exists.", 404);
      EntityType.destroy(id, function(err) {
          if (err) return res.send(err, 500);
          res.json({FieldValues: "deleted" });
      });
  });

  }
};

