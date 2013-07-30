table = new SimpleTable("baby-2010.csv");
for (row: table) {
  if (row.getField("name").startsWith("Ab")) {
    print(row);
  }
}
//endsWith("z")
