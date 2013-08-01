table = new SimpleTable("baby-2010.csv");
count = 0;
for (row: table) {
  if (row.getField("name").startsWith("A")) {
    print(row);
    count = count + 1;  // increases the value in count by 1
  }
}
print("count:", count);
