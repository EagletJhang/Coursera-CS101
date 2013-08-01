table = new SimpleTable("baby-2010.csv");
for (row: table) {
  if (row.getField("name").startsWith("A") &&
      row.getField("name").endsWith("y")) {
    print(row);
  }
}

table = new SimpleTable("baby-2010.csv");
for (row: table) {
  if (row.getField("name").startsWith("A") ||
      row.getField("name").endsWith("y")) {
    print(row);
  }
}

