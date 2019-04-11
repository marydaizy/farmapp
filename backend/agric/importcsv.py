from farm.models import District, Subcounty, Parish
import csv


def uploadCSV():

    f = open("locate.csv")

    reader = csv.reader(f)


    for district_name, parish_name, sub_county_name in reader:
        
        district, created = District.objects.get_or_create(name=district_name)

        subcounty, created = Subcounty.objects.get_or_create(name=sub_county_name, district=district)


        subcounty.parish_set.create(name=parish_name)

uploadCSV()
