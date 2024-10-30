module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      s_name: String,
      s_email: String,
      s_phoneNumber: Number,
      s_id: Number    
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Student = mongoose.model("students", schema);
  return Student;
};
