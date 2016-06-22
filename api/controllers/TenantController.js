/**
 * TenantController
 *
 * @description :: Server-side logic for managing tenants
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `TenantController.index()`
   */
  index: function (req, res) {
    Tenant.find().populate('entitys').exec(function (err,index){
      if (err) return res.send(err,500);
        res.json({TenantIndex:index});
    });
  },


  /**
   * `TenantController.new()`
   */
  new: function (req, res) {
    return res.json({
      todo: 'new() is not implemented yet!'
    });
  },


  /**
   * `TenantController.show()`
   */
  show: function (req, res) {
   var id = req.param('id');
   Tenant.findOne(id,function(err,show){
    if (err) return res.send(err,500);
      res.json({TenantShow:show});
   });
  },


  /**
   * `TenantController.create()`
   */
  create: function (req, res) {
    var values=req.params.all();
    Tenant.create(values,function(err,create){
      if (err) return res.send(err,500);
      res.json({TenantCreate:create});
    });
  },


  /**
   * `TenantController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },


  /**
   * `TenantController.update()`
   */
  update: function (req, res) {
   var values = req.params.all();
   var id = req.param('id');
   Tenant.update(id,values,function(err,update){
    if (err) return res.send(err,500);
    res.json({TenantUpdate:update});
   }); 
  },


  /**
   * `TenantController.destroy()`
   */
  destroy: function (req, res) {
    var id = req.param('id');
   Tenant.find(id,function(err,tenant){
    if (err) return res.send(err,500);
      if (!tenant) return res.send("No user with that idid exists.",404);
      Tenant.destroy(id,function(err){
        if (err) return res.send(err,500);
        res.json({values:"deleted"});
      });
   });
  }
};

