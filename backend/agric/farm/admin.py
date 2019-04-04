from django.contrib import admin
from .models import Officer, Farmer, Report, Season


# Register your models here.
# admin.site.register(Officer)
class OfficerAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'district', 'subcounty', 'telephone')

class FarmerAdmin(admin.ModelAdmin):
    list_display = ('username', 'parish', 'village', 'gender', 'age', 'marriage_status', 'language', 'telephone', 'photo', 'community_status', 'instructor_possibility', 'farm_area', 'crop_type', 'past_harvest')

class ReportAdmin(admin.ModelAdmin):
    list_display = ('username', 'season', 'area', 'rice_type', 'sowing_date', 'sowing_type', 'planting_type', 'levelling', 'ridge', 'whatercourse_state', 'fertilizer', 'fertilizer1_type', 'fertilizer1_amount', 'fertilizer2_amount', 'weed_condition', 'total_weed_times', 'harvest_date', 'harvest_amount', 'note', 'photo1', 'photo2', 'photo3', 'photo4')

class SeasonAdmin(admin.ModelAdmin):
    list_display = ('username', 'season', 'area', 'harvest')


admin.site.register(Officer, OfficerAdmin)
admin.site.register(Farmer, FarmerAdmin)
admin.site.register(Report, ReportAdmin)
admin.site.register(Season, SeasonAdmin)





    