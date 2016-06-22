/**
 * EntityTypeController
 *
 * @description :: Server-side logic for managing entitytypes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `EntityTypeController.index()`
   */
  index: function (req, res) {
    EntityType.find().populate('fields').exec(function (err,index){
      if (err) return res.send(err,500);
        res.json({EntityTypeIndex:index});
    });
  },


  /**
   * `EntityTypeController.new()`
   */
  new: function (req, res) {
    return res.json({
      todo: 'new() is not implemented yet!'
    });
  },


  /**
   * `EntityTypeController.show()`
   */
  show: function (req, res) {
   var id = req.param('id');
   EntityType.findOne(id,function(err,show){
    if (err) return res.send(err,500);
      res.json({EntityTypeShow:show});
   });
  },


  /**
   * `EntityTypeController.create()`
   */
  create: function (req, res) {
    var values=req.params.all();
    var id = req.param('tenantId');
       EntityType.create(values,function(err,create){
      if (err) return res.send(err,500);
      res.json({EntityTypeCreate:create});
    });    
  },


  /**
   * `EntityTypeController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },


  /**
   * `EntityTypeController.update()`
   */
  update: function (req, res) {
   var values = req.params.all();
   var id = req.param('id');
   EntityType.update(id,values,function(err,update){
    if (err) return res.send(err,500);
    res.json({EntityTypeUpdate:update});
   }); 
  },


  /**
   * `EntityTypeController.destroy()`
   */
  destroy: function (req, res) {
    var id = req.param('id');
   EntityType.find(id,function(err,entity){
    if (err) return res.send(err,500);
      if (!entity) return res.send("No user with that idid exists.",404);
      EntityType.destroy(id,function(err){
        if (err) return res.send(err,500);
        res.json({EntityTypeValues:"deleted"});
      });
   });
  }
};

