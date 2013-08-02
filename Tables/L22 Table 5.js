table = new SimpleTable("baby-2010.csv");

count1 = 0;
count2 = 0;
count3 = 0;
for (row: table) {

  if (row.getField("name").endsWith("a")) {
    count1 = count1 + 1;
  }

  if (row.getField("name").endsWith("i")) {
    count2 = count2 + 1;
  }
  
  if (row.getField("name").endsWith("o")) {
    count3 = count3 + 1;
  }

}
print("a count:", count1);
print("i count:", count2);
print("o count:", count3);
