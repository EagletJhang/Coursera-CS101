table = new SimpleTable("baby-2010.csv");
for (row: table) {
  print(row);
}

//Table Query Logic 查询
table = new SimpleTable("baby-2010.csv");
for (row: table) {
  if (row.getField("rank") == 6) {
    print(row);
  }
}

//rank field is < 10
//rank field is <= 10
//rank field is > 990
