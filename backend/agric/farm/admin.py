from django.contrib import admin
from .models import Officer, Farmer, Report, Season, District, Subcounty, Parish
from import_export.admin import ImportExportModelAdmin


# Register your models here.
# admin.site.register(Officer)
admin.site.site_header = "JicaPride"
@admin.register(Officer)
class OfficerAdmin(ImportExportModelAdmin):
    list_display = ('username', 'email', 'district', 'subcounty', 'telephone')
@admin.register(Farmer)
class FarmerAdmin(ImportExportModelAdmin):
    list_display = ('photo', 'username', 'parish', 'village', 'gender', 'age', 'marriage_status', 'language', 'telephone', 'community_status', 'instructor_possibility', 'farm_area', 'crop_type', 'past_harvest')
@admin.register(Report)
class ReportAdmin(ImportExportModelAdmin):
    list_display = ('username', 'season', 'area', 'rice_type', 'sowing_date', 'sowing_type', 'planting_type', 'levelling', 'ridge', 'whatercourse_state', 'fertilizer', 'fertilizer1_type', 'fertilizer1_amount', 'fertilizer2_amount', 'weed_condition', 'total_weed_times', 'harvest_date', 'harvest_amount', 'note', 'photo1', 'photo2', 'photo3', 'photo4')
@admin.register(Season)
class SeasonAdmin(ImportExportModelAdmin):
    list_display = ('username', 'season', 'area', 'harvest')


# admin.site.register(Officer)
# admin.site.register(Farmer)
# admin.site.register(Report)
# admin.site.register(Season)
admin.site.register(District)
admin.site.register(Subcounty)
admin.site.register(Parish)





    